import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { MatCardModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatSlideToggleModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
	declarations: [
		AppComponent,
		LoginFormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,

		MatCardModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule,
		MatSlideToggleModule,
		FormsModule,
    ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
