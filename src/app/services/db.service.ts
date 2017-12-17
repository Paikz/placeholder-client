import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettings } from '../appSettings';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DbService {

  constructor(private http: Http) { }

  getUsers(): Promise<any[]> {
        return this.http.get(AppSettings.API_ENDPOINT+'users')
            .toPromise()
            .then( response => response.json())
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
