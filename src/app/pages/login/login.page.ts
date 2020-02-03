import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
	isLoading = true;
	loginError: { message: string };

	constructor(private router: Router, private readonly authService: AuthService) { }

	ngOnInit() {
		const accessTocken = localStorage.getItem('accessToken');
		if (accessTocken) {
			this.authService.isLoggedIn(accessTocken).subscribe((isLoggedIn: boolean) => {
				if (isLoggedIn)
					this.router.navigate(['home']).catch(err => console.log(err));
				else
					this.isLoading = false;
			})
		} else {
			this.isLoading = false;
		}
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
		const { username, password } = this.form.value;
		this.authService.login(username, password).subscribe(
			(response: { accessToken: string }) => {
				localStorage.setItem('accessToken', response.accessToken);
				// ! TODO: pass token to home
				this.router.navigate(['home']).catch(err => console.log(err));
			},
			(err) => {
				// alert failed to login wrong credentials
				this.loginError = { message: '*authentication failed' };
			}
		)
	}

	onInputChange() {
		this.loginError = undefined;
	}
}
