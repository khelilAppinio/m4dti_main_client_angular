export class Message {
	isAdmin: boolean;
	body: string;
	date: number; // TODO: change to switable type.
	sourceSocketId?: string;
	mediaUrl?: string;

	constructor(body: string, date: number, isAdmin: boolean, sourceSocketId?: string, mediaUrl?: string) {
		this.isAdmin = isAdmin;
		this.body = body;
		this.date = date;
		this.sourceSocketId = sourceSocketId;
		this.mediaUrl = mediaUrl;
	}
}
