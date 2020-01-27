import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	constructor(private http: HttpClient) { }

	getOfflineUsers() {
		return this.http.get('http://localhost:3000/connected-clients-history?isConnected=false');
	}
}
