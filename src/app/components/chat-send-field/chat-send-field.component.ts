import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'm4dti-chat-send-field',
	templateUrl: './chat-send-field.component.html',
	styleUrls: ['./chat-send-field.component.scss']
})
export class ChatSendFieldComponent implements OnInit {

	toSendMessage = '';
	@Output('sendMessageEvent') sendMessageEvent = new EventEmitter<string>();
	constructor() { }

	ngOnInit() {
	}

	sendingMessage() {
		this.sendMessageEvent.emit(this.toSendMessage);
	}
}
