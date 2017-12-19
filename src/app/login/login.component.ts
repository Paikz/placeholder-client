import { Component, OnInit } from '@angular/core';
import { UserService }       from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    credentials: Object = {};

    constructor(private userService: UserService) {}

    authenticate() {
        this.userService.authenticate(this.credentials)
            .then(res => console.log("Login successful."))
            .catch(err => console.log(err))
    }

    ngOnInit() {}

}
