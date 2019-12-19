import { Message } from './message.model';

export class User {
	private id: string;
	private username: string;
	private avatar: string;
	private status: 'offline' | 'online';
	private sourceSocketId: string;

	constructor(username: string, sourceSocketId: string, focused?: boolean, avatar?: string, status?: UserStatus) {
		this.username = username;
		this.sourceSocketId = sourceSocketId;
		this.avatar = this.avatar ? this.avatar : 'https://picsum.photos/200/300?random=' + Math.floor(Math.random() * Math.floor(100));
		this.status = this.status ? this.status : UserStatus.ONLINE;
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

	private focused: boolean;
	private messages: Message[];

	constructor(username: string, sourceSocketId: string, messages: Message[], focused?: boolean, avatar?: string, status?: UserStatus) {
		super(username, sourceSocketId, focused, avatar, status);
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
}

enum UserStatus {
	OFFLINE = 'offline',
	ONLINE = 'online'
}
