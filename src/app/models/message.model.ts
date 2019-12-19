export class Message {
	admin: boolean;
	body: string;
	date: string; // TODO: change to switable type.
	sourceSocketId?: string;

	constructor(body: string, date: string, admin: boolean, sourceSocketId?: string) {
		this.admin = admin;
		this.body = body;
		this.date = date;
		this.sourceSocketId = sourceSocketId;
	}
}
