import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }       from '@angular/forms';
import { UserService }       from '../services/user.service';
import { AuthService }       from '../services/auth.service';
import { RegisterComponent } from './register.component';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, RouterTestingModule],
      declarations: [ RegisterComponent ],
      providers: [UserService,AuthService,
      {
          provide: AuthHttp,
          useFactory: authHttpServiceFactory,
          deps: [Http, RequestOptions]
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
