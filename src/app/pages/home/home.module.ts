import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ChatUserItemComponent } from '../../components/chat-user-item/chat-user-item.component';
import { ChatMessageComponent } from 'src/app/components/chat-message/chat-message.component';
import { ChatSendFieldComponent } from 'src/app/components/chat-send-field/chat-send-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		component: HomePage
	}
];

@NgModule({
	declarations: [HomePage, ChatUserItemComponent, ChatMessageComponent, ChatSendFieldComponent],
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
		MatButtonModule
	]
})
export class HomeModule { }
