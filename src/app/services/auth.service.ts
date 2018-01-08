import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor() { }

    loggedIn() {
        return tokenNotExpired("token");
    }

    getFollowers() {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token")).followers;
        } else {
            return [];
        }
    }

    getFollowing() {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token")).following;
        } else {
            return [];
        }
    }

    getCurrentUser() {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token"));
        } else {
            return "";
        }
    }

    getId() {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token")).id;
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
