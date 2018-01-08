import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../services/auth.service';
import { UserService }       from '../services/user.service';
import { ContentService }    from '../services/content.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { HttpModule, Http, RequestOptions } from '@angular/http';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ RouterTestingModule, HttpModule ],
        declarations: [ HomeComponent, NavbarComponent ],
        providers: [AuthService, UserService, ContentService,
            {
              provide: AuthHttp,
              useFactory: authHttpServiceFactory,
              deps: [Http, RequestOptions]
            }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
