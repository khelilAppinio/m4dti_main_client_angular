export class Message {
	isAdmin: boolean;
	body: string;
	date: number; // TODO: change to switable type.
	unread: boolean;
	sourceSocketId?: string;
	mediaUrl?: string;

	constructor(body: string, date: number, isAdmin: boolean,unread: boolean, sourceSocketId?: string, mediaUrl?: string) {
		this.isAdmin = isAdmin;
		this.body = body;
		this.date = date;
		this.unread = unread;
		this.sourceSocketId = sourceSocketId;
		this.mediaUrl = mediaUrl;
	}
}
