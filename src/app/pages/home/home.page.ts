import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'm4dti-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {


	users = [
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
	fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

	constructor() { }

	ngOnInit(): void {

	}

}
