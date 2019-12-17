import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../models/user.model';
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
	users: User[] = [];
	messages: Message[] = [];
	focusedUser: User;
	constructor(private socket: Socket, private messagesService: MessagesService) { }

	ngOnInit(): void {
		this.socket.emit('messageInitFromMainClient', 'init'); // ! TODO: error handling
		this.socket.on('online_clients', (data: {
			connectedClients: string[]
		}) => {
			this.users = data.connectedClients.map(username => new User(username));
		});
	}

	onAdminSendMessage(mssg: string) {
		this.messages.push({
			admin: true,
			body: mssg,
			date: '15/13/02'
		});
		this.scrollMessagesContainerToBottom();
		// emit message
		this.socket.emit('messageFromMainClientToServer', { to: 'i_q0kmO1WQr5K9v0AAAA', body: mssg });

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

	scrl($event) {
		console.log($event);

	}

	focusOnUser(user: User) {
		this.focusedUser && (this.focusedUser.focused = false);
		user.focused = true;
		this.focusedUser = user;

		this.messagesService.getMessagesByUserId(user.id).subscribe( (messages: Message[]) => {
			this.messages = messages;
		})
	}
}
