import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class MessagesService {

	private messages: Message[] = [
		{
			isAdmin: false,
			body: 'sit iste cupiditate commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi.',
			date: new Date().getTime()
		},
		{
			isAdmin: false,
			body: '. Molestias minima dolore, sit iste cupiditate commodi dicta? Placeat nesciuntnderit necessitatibus omnis expedita aperiam?',
			date: new Date().getTime()
		},
		{
			isAdmin: false,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: new Date().getTime()
		},
		{
			isAdmin: true,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: new Date().getTime()
		},
		{
			isAdmin: false,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: new Date().getTime()
		},
		{
			isAdmin: true,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: new Date().getTime()
		},
		{
			isAdmin: true,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: new Date().getTime()
		}
	];
	constructor(private http: HttpClient) { }

	getMockedMessagesByUserId(id: string): Observable<Message[]> {
		return new Observable(subscriber => { //! TODO: remove mocked messages list
			subscriber.next(this.messages.slice(Math.floor(Math.random() * Math.floor(this.messages.length - 1))));
		});
	}
	getMessagesByUserId(id: string, isAdmin?: boolean) {
		const isAdminQuery = (typeof isAdmin === 'undefined') ? '' : `?isAdmin=${isAdmin}`;
		return this.http.get(`http://localhost:3000/messages/${id}/${isAdminQuery}`);
	}
}
