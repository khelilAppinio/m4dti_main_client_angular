import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'm4dti-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

	@Output() submitEM = new EventEmitter();
	form: FormGroup = new FormGroup({
		username: new FormControl(''),
		password: new FormControl(''),
	});
	lang = 'en';

	constructor(private router: Router) { }

	ngOnInit() {
	}

	submit() {
		if (this.form.valid) {
			this.submitEM.emit(this.form.value);
		}
	}

	langToggle() {
		this.lang = this.lang === 'en' ? 'fr' : 'en';
	}

	login() {
		this.router.navigate(['home']).then( res => console.log(res)).catch( err => console.log(err));
	}
}
