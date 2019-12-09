import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule } from '@angular/material';
import { ChatUserItemComponent } from '../../components/chat-user-item/chat-user-item.component';
import { ChatMessageComponent } from 'src/app/components/chat-message/chat-message.component';

const routes: Routes = [
	{
		path: '',
		component: HomePage
	}
];

@NgModule({
	declarations: [HomePage, ChatUserItemComponent, ChatMessageComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatSidenavModule,
		MatIconModule,
		MatToolbarModule,
		MatListModule
	]
})
export class HomeModule { }
