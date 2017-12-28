import { Component, OnInit } from '@angular/core';
import { UserService }       from '../services/user.service';
import { ContentService }       from '../services/content.service';
import { ActivatedRoute }    from '@angular/router';
import { AppSettings }       from '../appSettings';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

    user: Object;
    userPosts: Object;
    avatarUrl: SafeUrl;
    postUrls: SafeUrl[] = [];

    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private contentService: ContentService,
                private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.user = {
            username: '',
            email: '',
            img: ''
        }
        this.getUser();
        this.getPosts();
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
        for (let key in posts) {
            var obj = posts[key];

            console.log(obj);
            this.contentService.getPostsImage(obj['img'])
                .then(blob => {
                    let urlCreator = window.URL;
                    this.postUrls.push(this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob)));
                })
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
        const username = this.route.snapshot.paramMap.get('username');
        this.userService.getUser(username)
            .then( res => {
                this.user = res
                if (this.user['img']) {
                    this.getAvatar(this.user['img']);
                }
            })
            .catch( err => console.log(err));
    }

}
