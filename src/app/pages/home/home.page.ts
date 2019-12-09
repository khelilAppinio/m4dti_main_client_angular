import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Message } from '../../models/message.model';

@Component({
	selector: 'm4dti-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {


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
			body: 'lkwmed wedherf ergihiusdf sdfijn',
			date: '22/02/2019'
		}
	];
	fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

	constructor() { }

	ngOnInit(): void {

	}

}
