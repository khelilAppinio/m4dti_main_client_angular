import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login.page';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		component: LoginPage
	}
];

@NgModule({
	declarations: [LoginPage],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),

		MatCardModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule,
		MatSlideToggleModule,
		FormsModule,
		ReactiveFormsModule,
	]
})
export class LoginModule { }
