import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { User, UserView } from '../../models/user.model';

@Component({
	selector: 'm4dti-chat-user-item',
	templateUrl: './chat-user-item.component.html',
	styleUrls: ['./chat-user-item.component.scss']
})
export class ChatUserItemComponent implements OnInit {

	@Input('user') user: UserView;
	constructor() { }

	ngOnInit() {
	}

}
