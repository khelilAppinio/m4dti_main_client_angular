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
			admin: false,
			body: 'sit iste cupiditate commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi.',
			date: '22/02/2019'
		},
		{
			admin: false,
			body: '. Molestias minima dolore, sit iste cupiditate commodi dicta? Placeat nesciuntnderit necessitatibus omnis expedita aperiam?',
			date: '22/02/2019'
		},
		{
			admin: false,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		},
		{
			admin: true,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		},
		{
			admin: false,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		},
		{
			admin: true,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
		},
		{
			admin: true,
			body: 'commodi dicta? Placeat deleniti nesciunt quos nemo velit illum voluptatem excepturi, aperiam?',
			date: '22/02/2019'
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
