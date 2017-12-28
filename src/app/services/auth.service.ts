import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor() { }

    loggedIn() {
        return tokenNotExpired("token");
    }

    getCurrentUser() {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token"));
        } else {
            return "";
        }
    }

    getUsername() {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token")).username;
        } else {
            return "";
        }
    }

    getEmail() {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token")).email;
        } else {
            return "";
        }
    }

    logOut() {
        localStorage.removeItem('token');
    }

}
