import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../models/user.model';
import { Message } from '../../models/message.model';
import { Socket } from 'ngx-socket-io';

@Component({
	selector: 'm4dti-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePageComponent implements OnInit {

	@ViewChild('mssgContainer', { static: false }) mssgContainer: ElementRef;
	users: User[] = [];

	messages: Message[] = [
		{
			admin: false,
			body: 'sit iste cupiditate commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, reprehenderit necessitatibus omnis expedita aperiam?',
			date: '22/02/2019'
		},
		{
			admin: false,
			body: '. Molestias minima dolore, sit iste cupiditate commodi dicta? Placeat nesciuntnderit necessitatibus omnis expedita aperiam?',
			date: '22/02/2019'
		},
		{
			admin: false,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		},
		{
			admin: true,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		},
		{
			admin: false,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		},
		{
			admin: true,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		},
		{
			admin: true,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		}
	];
	fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);
	onlineUsers: string[];

	constructor(private socket: Socket) { }

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
}
