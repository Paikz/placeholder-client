import { Injectable }               from '@angular/core';
import { Http, URLSearchParams, ResponseContentType }    from '@angular/http';
import { AppSettings }              from '../appSettings';
import { AuthHttp, JwtHelper }      from 'angular2-jwt';
import { AuthService }              from './auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContentService {

    constructor(private authHttp: AuthHttp, private http: Http, private authService: AuthService) { }

    getAvatar(imgPath: string): Promise<any[]> {
        return this.authHttp.get(AppSettings.API_ENDPOINT+`/content/${imgPath}`, { responseType: ResponseContentType.Blob })
          .toPromise()
          .then( response => response.blob())
          .catch(this.handleError);
    }

    getPostsImage(imgPath: string): Promise<any[]> {
        return this.authHttp.get(AppSettings.API_ENDPOINT+`/content/${imgPath}`, { responseType: ResponseContentType.Blob })
          .toPromise()
          .then( response => response.blob())
          .catch(this.handleError);
    }

    deletePost(id: string): Promise<any[]>{
        let params = new URLSearchParams();
        params.append('id', this.authService.getId());
        return this.authHttp.post(AppSettings.API_ENDPOINT + `/posts/${id}`, params)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    uploadAvatar(fileList: FileList): Promise<any[]> {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('avatar', file, file.name);
        formData.append('username', this.authService.getUsername());
        formData.append('id', this.authService.getId());
        return this.authHttp.patch(AppSettings.API_ENDPOINT + '/upload/avatar', formData)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    uploadPost(fileList: FileList, desc: string): Promise<any[]> {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('post', file, file.name);
        formData.append('username', this.authService.getUsername());
        formData.append('description', desc);
        formData.append('id', this.authService.getId());
        return this.authHttp.post(AppSettings.API_ENDPOINT + '/upload/post', formData)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
