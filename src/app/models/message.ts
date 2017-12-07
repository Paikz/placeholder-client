export class Message {
    timestamp: string;
    username: string;
    message: string;

    constructor(timestamp: string, username: string, message: string) {
        this.timestamp = timestamp;
        this.username = username;
        this.message = message;
    }
}
