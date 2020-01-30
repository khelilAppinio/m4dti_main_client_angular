import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { Message } from '../../models/message.model';

@Component({
	selector: 'm4dti-chat-message',
	templateUrl: './chat-message.component.html',
	styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

	@Input('message') message: Message;
	constructor(public dialog: MatDialog) { }

	ngOnInit() {
	}

	isImage(url: string) {
		
		return !url.includes('uploaded_audios');
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(ImageDialogComponent, {
			width: '80%',
			data: { imageUrl: this.message.mediaUrl }
		});
	}

}
