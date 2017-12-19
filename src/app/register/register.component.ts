import { Component, OnInit } from '@angular/core';
import { UserService }       from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  user: Object = {};

  constructor(private userService: UserService) { }

  createUser() {
    this.userService.createUser(this.user)
        .then(res => console.log("Create user successful."))
        .catch(err => console.log(err))
  }

  ngOnInit() {
  }

}
