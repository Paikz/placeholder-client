import { Component, OnInit } from '@angular/core';
import { UserService }       from '../services/user.service';
import { AuthService }       from '../services/auth.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  user: Object = {};

  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  createUser() {
    this.userService.createUser(this.user)
        .then(res => {
            console.log("Create user successful.");
            this.router.navigate(['login']);
        })
        .catch(err => console.log(err))
  }

  ngOnInit() {
      if(this.authService.loggedIn()) {
        this.router.navigate(['']);
      }
  }

}
