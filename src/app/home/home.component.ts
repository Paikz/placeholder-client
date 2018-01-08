import { Component, OnInit } from '@angular/core';
import { SlicePipe }         from '@angular/common';
import { AuthService }       from '../services/auth.service';
import { UserService }       from '../services/user.service';
import { ContentService }    from '../services/content.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    postUrls: SafeUrl[] = [];

    constructor(private authService: AuthService,
                private userService: UserService,
                private contentService: ContentService,
                private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this.userService.getPostsFromFollowing(this.authService.getUsername())
            .then( res => {
                this.getPostsImage(res);
            })
            .catch( err => console.log(err));
    }

    sortPostUrls() {
        this.postUrls.sort((a, b) => {
            let d1 = Date.parse(a['data'].date);
            let d2 = Date.parse(b['data'].date);
            if (d1 > d2)
                return -1;
            else if (d1 < d2)
                return 1;
            else
                return 0;
        });
    }

    getPostsImage(posts: Object) {
        for (let key in posts) {
            let user = posts[key];
            //When only one image is present we cant use foreach because the entry is an an Object and not an array.
            if(user.constructor === Array) {
                for(let post in user) {
                    var obj = user[post];
                    this.contentService.getPostsImage(obj['img'])
                        .then(((obj,blob) => {
                            let urlCreator = window.URL;
                            this.postUrls.push({
                                url: this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob)),
                                data: obj
                            });
                            this.sortPostUrls();
                        })
                        .bind(this, obj))
                        .catch(err => console.log(err));
                }
            } else {
                this.contentService.getPostsImage(user['img'])
                    .then(((user,blob) => {
                        let urlCreator = window.URL;
                        this.postUrls.push({
                            url: this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob)),
                            data: user
                        });
                        this.sortPostUrls();
                    })
                    .bind(this, user))
                    .catch(err => console.log(err));
            }
        }

    }

}
