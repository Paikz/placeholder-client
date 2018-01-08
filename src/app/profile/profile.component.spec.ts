import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../services/auth.service';
import { UserService }       from '../services/user.service';
import { NgxSmartModalService, NgxSmartModalModule } from 'ngx-smart-modal';
import { ContentService }    from '../services/content.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { HttpModule, Http, RequestOptions } from '@angular/http';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ RouterTestingModule, HttpModule, NgxSmartModalModule.forRoot() ],
        declarations: [ ProfileComponent, NavbarComponent ],
        providers: [AuthService, UserService, ContentService,NgxSmartModalService,
            {
              provide: AuthHttp,
              useFactory: authHttpServiceFactory,
              deps: [Http, RequestOptions]
            }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
