import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

    currentUser: Object;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.currentUser = this.authService.getCurrentUser();
    }

}
