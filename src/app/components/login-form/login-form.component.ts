import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'm4dti-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

	form: FormGroup = new FormGroup({
		username: new FormControl(''),
		password: new FormControl(''),
	});

	lang = 'en';

	@Output() submitEM = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}

	submit() {
		if (this.form.valid) {
			this.submitEM.emit(this.form.value);
		}
	}

	langToggle() {
		this.lang = this.lang == 'en' ? 'fr' : 'en';
	}
}
