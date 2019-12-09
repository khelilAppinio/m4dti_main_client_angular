import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
	selector: 'm4dti-chat-user-item',
	templateUrl: './chat-user-item.component.html',
	styleUrls: ['./chat-user-item.component.scss']
})
export class ChatUserItemComponent implements OnInit {

	@Input('user') user: ElementRef;
	constructor() { }

	ngOnInit() {
	}

}
