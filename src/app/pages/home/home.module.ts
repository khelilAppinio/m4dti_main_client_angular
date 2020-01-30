import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home.page';
import { Routes, RouterModule } from '@angular/router';
import {
	MatSidenavModule,
	MatIconModule,
	MatToolbarModule,
	MatListModule,
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatDialogModule
} from '@angular/material';
import { ChatUserItemComponent } from '../../components/chat-user-item/chat-user-item.component';
import { ChatMessageComponent } from '../../components/chat-message/chat-message.component';
import { ChatSendFieldComponent } from '../../components/chat-send-field/chat-send-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageDialogComponent } from '../../components/image-dialog/image-dialog.component';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent
	}
];

@NgModule({
	entryComponents: [ImageDialogComponent],
	declarations: [
		HomePageComponent,
		ChatUserItemComponent,
		ChatMessageComponent,
		ChatSendFieldComponent,
		ImageDialogComponent,

		],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),

		FormsModule,
		ReactiveFormsModule,

		MatSidenavModule,
		MatIconModule,
		MatToolbarModule,
		MatListModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule,
	]
})
export class HomeModule { }
