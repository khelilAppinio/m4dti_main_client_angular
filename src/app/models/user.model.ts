export class User {
	username: string;
	avatar: string;
	status: 'offline' | 'online';

	constructor(username: string, avatar?: string, status?: UserStatus) {
		this.username = username;
		this.avatar = this.avatar ? this.avatar : 'https://picsum.photos/200/300?random=' + Math.floor(Math.random() * Math.floor(100));
		this.status = this.status ? this.status : UserStatus.ONLINE;
	}
}

enum UserStatus {
	OFFLINE = 'offline',
	ONLINE = 'online'
}
