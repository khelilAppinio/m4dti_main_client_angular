import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
	selector: 'm4dti-chat-message',
	templateUrl: './chat-message.component.html',
	styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

	@Input('message') message: ElementRef;
	constructor() { }

	ngOnInit() {
	}

}
