import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { AppSettings } from '../appSettings';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers(): Promise<any[]> {
      return this.http.get(AppSettings.API_ENDPOINT+'/users')
          .toPromise()
          .then( response => response.json())
          .catch(this.handleError);
  }

  createUser(user: Object): Promise<any[]> {
      let params = new URLSearchParams();
      params.append('email', user["email"]);
      params.append('username', user["username"]);
      params.append('password', user["password"]);

      return this.http.post(AppSettings.API_ENDPOINT+'/users', params)
          .toPromise()
          .then( response => console.log(response))
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
