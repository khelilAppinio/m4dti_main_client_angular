import { Message } from './message.model';

export class User {
	public id: string;
	public username: string;
	public avatar: string;
	public status: UserStatus;
	public sourceSocketId: string;
	public unreadMessagesNumber: number;
	constructor(
		username: string,
		sourceSocketId: string,
		status: UserStatus,
		unreadMessagesNumber: number,
		focused?: boolean,
		avatar?: string
	) {
		this.username = username;
		this.sourceSocketId = sourceSocketId;
		this.avatar = this.avatar ? this.avatar : 'https://picsum.photos/200/300?random=' + Math.floor(Math.random() * Math.floor(100));
		this.status = status;
		this.unreadMessagesNumber = unreadMessagesNumber;
	}

	public getSourceSocketId(): string {
		return this.sourceSocketId;
	}

	public getId(): string {
		return this.id;
	}

	public getUsername(): string {
		return this.username;
	}
}

export class UserView extends User {

	public focused: boolean;
	public messages: Message[];

	constructor(
		username: string,
		sourceSocketId: string,
		messages: Message[],
		status: UserStatus,
		unreadMessagesNumber: number,
		focused?: boolean,
		avatar?: string
	) {
		super(username, sourceSocketId, status, unreadMessagesNumber, focused, avatar);
		this.focused = this.focused ? this.focused : false;
		this.messages = messages;
	}

	public pushMessage(message: Message) {
		this.messages.push(message);
	}

	public getMessages(): Message[] {
		return this.messages;
	}

	public setFocused(focused: boolean): void {
		this.focused = focused;
	}

	public isFocused(): boolean {
		return this.focused;
	}

	public incrementUnreadMessagesCount() {
		this.unreadMessagesNumber ++;
	}

	public resetUnreadMessagesCount() {
		this.messages.forEach( mssg => mssg.unread = false);
		this.unreadMessagesNumber = 0;
	}
}

export enum UserStatus {
	OFFLINE = 'offline',
	ONLINE = 'online'
}
