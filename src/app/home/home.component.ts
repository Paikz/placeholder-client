import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    loggedIn: boolean = false;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.loggedIn = this.authService.loggedIn();
    }

    logOut() {
        this.authService.logOut();
        this.loggedIn = false;
    }

}
