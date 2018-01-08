import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService }       from '../services/user.service';
import { AuthService }       from '../services/auth.service';
import { ContentService }    from '../services/content.service';
import { ActivatedRoute }    from '@angular/router';
import { AppSettings }       from '../appSettings';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-profile',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

    showErrRoute: Boolean = false;
    user: Object;
    userPosts: Object;
    avatarUrl: SafeUrl;
    postUrls: SafeUrl[] = [];

    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private contentService: ContentService,
                private sanitizer: DomSanitizer,
                private authService: AuthService,
                public ngxSmartModalService: NgxSmartModalService) { }

    ngOnInit() {
        this.route.params.forEach(params => {
            this.getUser();
            this.getPosts();
            this.verifyOwnProfile();
        })
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

    injectDataIntoModal(obj: Object) {
        obj['data']['date'] = obj['data']['date'].substring(0, 10);
        this.ngxSmartModalService.setModalData(obj, 'imgModal', true);
    }

    isFollowed(user: Object) {
        return (user['followers'].indexOf(this.authService.getUsername()) > -1);
    }

    unfollow(username: string) {
        this.userService.unfollow(username)
            .then(res => this.getUser())
            .catch(err => console.log(err));
    }

    follow(username: string) {
        this.userService.follow(username)
            .then(res => this.getUser())
            .catch(err => console.log(err));
    }

    deletePost(id: string) {
        this.contentService.deletePost(id)
            .then(res => {
                this.getPosts();
            })
            .catch(err => console.log(err));
    }

    verifyOwnProfile() {
        if (this.authService.getUsername() == this.route.snapshot.paramMap.get('username')) {
            return true;
        }
    }

    getAvatar(filePath: string) {
        this.contentService.getAvatar(filePath)
            .then(blob => {
                let urlCreator = window.URL;
                this.avatarUrl = this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
            })
            .catch(err => console.log(err));
    }

    getPostsImage(posts: Object) {
        this.postUrls = [];
        for (let key in posts) {
            const obj = posts[key];
            this.contentService.getPostsImage(obj['img'])
                .then(((obj, blob) => {
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
    }

    avatarChange(event) {
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            this.contentService.uploadAvatar(fileList)
                .then(res => {
                    console.log("Upload successful.");
                    this.getUser();
                })
                .catch(err => console.log(err));
        }
    }

    postChange(event) {
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            this.contentService.uploadPost(fileList, "My desc")
                .then(res => {
                    console.log("Upload successful.");
                    this.getPosts();
                })
                .catch(err => console.log(err));
        }
    }

    getPosts() {
        const username = this.route.snapshot.paramMap.get('username');
        this.userService.getPosts(username)
            .then( res => {
                this.userPosts = res
                this.getPostsImage(this.userPosts);
            })
            .catch( err => console.log(err));
    }

    getUser() {
        this.user = null;
        this.showErrRoute = false;
        this.avatarUrl = null;
        const username = this.route.snapshot.paramMap.get('username');
        this.userService.getUser(username)
            .then( res => {
                this.user = res
                if (this.user['img']) {
                    this.getAvatar(this.user['img']);
                }
            })
            .catch( err => {
                this.showErrRoute = true;
            });
    }

}
