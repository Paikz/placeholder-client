import { Injectable }               from '@angular/core';
import { Http, URLSearchParams }    from '@angular/http';
import { AppSettings }              from '../appSettings';
import { AuthHttp, JwtHelper }      from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private authHttp: AuthHttp, private http: Http) { }

    getUsers(): Promise<any[]> {
        return this.authHttp.get(AppSettings.API_ENDPOINT+'/users')
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
                localStorage.setItem('user', JSON.stringify(this.jwtHelper.decodeToken(response.json().token)));
                //Get values from localstorage
                //console.log(JSON.parse(localStorage.getItem("user")).username);
                console.log("Token stored in localstorage");
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
