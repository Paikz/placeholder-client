import { Injectable }               from '@angular/core';
import { Http, URLSearchParams }    from '@angular/http';
import { AppSettings }              from '../appSettings';
import { AuthHttp, JwtHelper }      from 'angular2-jwt';
import { AuthService }              from './auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor(private authHttp: AuthHttp, private http: Http, private authService: AuthService) { }

    getUser(username: string): Promise<any[]> {
        return this.authHttp.get(AppSettings.API_ENDPOINT+`/users/${username}`)
            .toPromise()
            .then( response => response.json())
            .catch(this.handleError);
    }

    getPosts(username: string): Promise<any[]> {
        return this.authHttp.get(AppSettings.API_ENDPOINT+`/posts/${username}`)
            .toPromise()
            .then( response => response.json())
            .catch(this.handleError);
    }

    createUser(user: Object): Promise<any[]> {
        let params = new URLSearchParams();
        params.append('email', user["email"]);
        params.append('username', user["username"]);
        params.append('password', user["password"]);

        return this.http.post(AppSettings.API_ENDPOINT + '/users', params)
            .toPromise()
            .then( response => console.log(response))
            .catch(this.handleError);
    }

    authenticate(credentials: Object): Promise<any[]>{
        let params = new URLSearchParams();
        params.append("username", credentials["username"]);
        params.append("password", credentials["password"]);

        return this.http.post(AppSettings.API_ENDPOINT + '/authenticate', params)
            .toPromise()
            .then( response => {
                localStorage.setItem('token', response.json().token);
                console.log("Token stored in localstorage");
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
