import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {

    private msg: string;
    private connected: boolean;
    private username: string;
    private webSocket: WebSocket;
    private messages: Message[];
    private subProtocol: string;

    constructor() {
        this.msg = '';
        this.connected = false;
        this.messages = [];
        this.subProtocol = 'json';
    }

    ngOnInit() {}

    onConnection() {

        this.webSocket = new WebSocket('ws://localhost:3000', this.subProtocol);

        if (this.webSocket.readyState != 3) {
            this.connected = true;
        }

        this.webSocket.addEventListener('open', event => {
            const msg = {username: 'Server', message: 'The websocket is now open.'}
            this.chatLog(msg);
        });

        this.webSocket.addEventListener('message', event => {
            this.chatLog(JSON.parse(event.data));
        });

        this.webSocket.addEventListener('close', event => {
            const msg = {username: 'Server', message: 'The websocket is now closed.'};
            this.chatLog(msg);
        });

        this.webSocket.addEventListener('error', event => {
            const msg = {username: 'Server', message: 'An error occured...'};
            this.chatLog(msg);
        });
    }

    chatLog(res) {
        const timestamp = new Date().toLocaleTimeString();
        const msg = new Message(timestamp, res.username, res.message);
        this.messages.push(msg);
    }

    onSend() {
        if (!this.webSocket || this.webSocket.readyState === 3) {
          console.log('The websocket is not connected to a server');
        } else {
          this.webSocket.send(
            JSON.stringify({
              username: this.username,
              message: this.msg
            }));
            let msg = {username: this.username, message: this.msg};
            this.chatLog(msg);
        }
    }

    onClose() {
        this.webSocket.close();
    }

}
