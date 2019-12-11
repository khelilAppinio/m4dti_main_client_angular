import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../models/user.model';
import { Message } from '../../models/message.model';

@Component({
	selector: 'm4dti-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

	@ViewChild('mssgContainer', { static: false }) mssgContainer: ElementRef;
	users: User[] = [
		{
			avatar: '../../../assets/home-bckgrnd.jpg',
			username: 'john-zoubir',
			status: 'offline',
		},
		{
			avatar: '../../../assets/home-bckgrnd.jpg',
			username: 'john-makhlouf',
			status: 'online',
		},
		{
			avatar: '../../../assets/home-bckgrnd.jpg',
			username: 'john-rachid',
			status: 'online',
		}
	];

	messages: Message[] = [
		{
			owner: false,
			body: 'sit iste cupiditate commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, reprehenderit necessitatibus omnis expedita aperiam?',
			date: '22/02/2019'
		},
		{
			owner: false,
			body: '. Molestias minima dolore, sit iste cupiditate commodi dicta? Placeat nesciuntnderit necessitatibus omnis expedita aperiam?',
			date: '22/02/2019'
		},
		{
			owner: false,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		},
		{
			owner: true,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		},
		{
			owner: false,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		},
		{
			owner: true,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		},
		{
			owner: true,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		}
	];
	fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

	constructor() { }

	ngOnInit(): void {

	}

	onOwnerSendMessage(mssg) {
		this.messages.push({
			owner: true,
			body: mssg,
			date: '15/13/02'
		});
		this.mssgContainer.nativeElement.scrollTop = 500;
		console.log('scrollTop', this.mssgContainer.nativeElement.scrollTop);
		console.log('scrollBottom', this.mssgContainer.nativeElement.scrollBottom);
	}
}
