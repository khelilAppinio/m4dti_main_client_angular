import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserView, UserStatus } from '../../models/user.model';
import { Message } from '../../models/message.model';
import { Socket } from 'ngx-socket-io';
import { MessagesService } from '../../services/messages.service';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
	selector: 'm4dti-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePageComponent implements OnInit {

	@ViewChild('mssgContainer', { static: false }) mssgContainer: ElementRef;
	users: UserView[] = [];
	messages: Message[] = [];
	focusedUser: UserView;
	constructor(
		private router: Router,
		private socket: Socket,
		private messagesService: MessagesService,
		private usersService: UsersService,
		private authService: AuthService
	) { }

	ngOnInit(): void {
		const accessToken = localStorage.getItem('accessToken');
		this.authService.isLoggedIn(accessToken).subscribe(
			(isLoggedIn: boolean) => {
				if (isLoggedIn) {
					this.initConnection();
				} else {
					this.router.navigate(['']).catch( err => console.log(err));
				}
			},
			(err) => {
					this.router.navigate(['']).catch( perr => console.log(perr));

			}
		)
	}

	initConnection() {
		this.socket.emit('messageInitFromMainClient', 'init'); // ! TODO: error handling
		this.socket.on('online_clients', (data: {
			connectedClients: { username: string, sourceSocketId: string }[]
		}) => {
			// * give messages history not always empty array
			data.connectedClients.forEach(userFromServer => {
				if (!this.users.find(user => user.getSourceSocketId() === userFromServer.sourceSocketId)) {
					this.messagesService.getMessagesByUserId(userFromServer.username).subscribe((result: { messages: Message[], unreadCount: number }) => {
						this.users.push(
							new UserView(userFromServer.username, userFromServer.sourceSocketId, result.messages, UserStatus.ONLINE, result.unreadCount)
						);
					});
				}
			});

			if (data.connectedClients.length !== this.users.length) {
				// removing garbage users (no more connected)
				this.users = this.users.filter(user => data.connectedClients.find(userFromServer => userFromServer.sourceSocketId === user.getSourceSocketId()));
			}
		});
		this.socket.on('messageFromClientToMainClient', (message: any) => { // ! TODO: specify message type
			const target = this.users.find(user => user.getSourceSocketId() === message.sourceSocketId);
			if (target) {
				target.pushMessage(new Message(message.body, message.date, false, false, message.sourceSocketId, message.mediaUrl));
				target.incrementUnreadMessagesCount();
			} else {
				// ! TODO: error handling
				throw new Error('something went wrong');
			}
		});
		this.socket.on('messageFromMainClientToClient', (message: {targetSocketID: string, body: string, date: number}) => {
			console.log(message);
			const newMessageFromAdminTarget = this.users.find( (user: UserView) => user.getSourceSocketId() === message.targetSocketID);
			if (newMessageFromAdminTarget) {
				newMessageFromAdminTarget.pushMessage(new Message(message.body, message.date, true, false));
			}
		})

		// this.getOfflineUsers();
	}

	onAdminSendMessage(mssg: string) {
		console.log(this.users);

		// TODO: this.scrollMessagesContainerToBottom();
		// emit message
		this.socket.emit('messageFromMainClientToServer', {
			userSourceSocketId: this.focusedUser.getSourceSocketId(),
			userId: this.focusedUser.getId(),
			username: this.focusedUser.getUsername(),
			body: mssg
		});

	}

	scrollMessagesContainerToBottom() {
		try {
			console.log(this.mssgContainer);
			this.mssgContainer.nativeElement.onscroll((event) => {
				console.log(event);
			});
			// this.mssgContainer.nativeElement.scrollTop = this.mssgContainer.nativeElement.scrollHeight;
		} catch (error) {
			console.log(error);
		}
	}

	focusOnUser(user: UserView) {
		this.focusedUser && (this.focusedUser.setFocused(false));
		this.focusedUser = user;
		this.focusedUser.setFocused(true);
		this.focusedUser.resetUnreadMessagesCount();
		// ! TODO: tell the server about read messages
		this.messages = this.focusedUser.getMessages();
		this.messagesService.setMessagesAsReadById(this.focusedUser.getUsername()).subscribe(
			res => {/** set to read success */ },
			err => {
				// ! TODO: error handling
			});
		// ! TODO: should retry if failed

	}

	getOfflineUsers() {
		this.usersService.getOfflineUsers().subscribe((users: Array<any>) => {
			users.forEach(user => {
				this.users.push(new UserView(user.username, user.socketID, [], UserStatus.OFFLINE, 0));
			});
			console.log(this.users);
		}, err => console.log(err));
	}

	showUsers() {
		this.getOfflineUsers();
		console.log(this.users);
	}

	onLogout(){
		localStorage.removeItem('accessToken');
		this.router.navigate(['']).catch( err => console.log(err));
	}
}
