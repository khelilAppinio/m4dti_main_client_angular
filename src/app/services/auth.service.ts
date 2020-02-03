import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

	login(username: string, password: string) {
		return this.http.post(`http://localhost:3000/auth/login`, {username, password});
	}

	isLoggedIn(accessToken: string) {
		return this.http.get(`http://localhost:3000/auth/isLoggedIn`, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + accessToken)});
	}
}
