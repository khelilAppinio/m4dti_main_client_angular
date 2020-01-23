import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserView } from '../../models/user.model';
import { Message } from '../../models/message.model';
import { Socket } from 'ngx-socket-io';
import { MessagesService } from '../../services/messages.service';

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
	constructor(private socket: Socket, private messagesService: MessagesService) { }

	ngOnInit(): void {
		this.socket.emit('messageInitFromMainClient', 'init'); // ! TODO: error handling
		this.socket.on('online_clients', (data: {
			connectedClients: { username: string, sourceSocketId: string }[]
		}) => {
			// ! TODO: should give messages history not always empty array
			data.connectedClients.forEach(userFromServer => {
				if (!this.users.find(user => user.getSourceSocketId() === userFromServer.sourceSocketId)) {
					this.messagesService.getMessagesByUserId(userFromServer.username).subscribe((messages: Message[]) => {
						this.users.push(new UserView(userFromServer.username, userFromServer.sourceSocketId, messages));
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
				target.pushMessage(new Message(message.body, message.date, false, message.sourceSocketId, message.mediaUrl));
			} else {
				// ! TODO: error handling
				throw new Error('something went wrong');
			}
		});
	}

	onAdminSendMessage(mssg: string) {
		this.messages.push({
			isAdmin: true,
			body: mssg,
			date: new Date().getTime()
		});
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
		this.messages = this.focusedUser.getMessages();

	}
}
