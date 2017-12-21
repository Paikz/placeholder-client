import { Component, OnInit } from '@angular/core';
import { UserService }       from '../services/user.service';
import { AuthService }       from '../services/auth.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    credentials: Object = {};

    constructor(private userService: UserService,
                private router: Router,
                private authService: AuthService) {}

    authenticate() {
        this.userService.authenticate(this.credentials)
            .then(res => {
                console.log("Login successful.");
                this.router.navigate(['']);
            })
            .catch(err => console.log(err))
    }

    ngOnInit() {
        if(this.authService.loggedIn()) {
          this.router.navigate(['']);
        }
    }

}
