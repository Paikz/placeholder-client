import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService }       from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

    currentUser: Object;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.currentUser = this.authService.getCurrentUser();
    }

    logOut() {
        this.authService.logOut();
        this.router.navigate(['login']);
    }

}
