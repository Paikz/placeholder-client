import { BrowserModule }                            from '@angular/platform-browser';
import { RouterModule }                             from '@angular/router';
import { NgModule }                                 from '@angular/core';
import { HttpModule, Http, RequestOptions }         from '@angular/http';
import { FormsModule }                              from '@angular/forms';
import { ReactiveFormsModule }                      from '@angular/forms';

//Custom modules
import { AuthHttp, AuthConfig } from 'angular2-jwt';

//Guards
import { AuthGuard }            from './guards/auth.guard';

//Services
import { UserService }          from './services/user.service';
import { AuthService }          from './services/auth.service';
import { ContentService }          from './services/content.service';

//Components
import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/home.component';
import { ChatComponent }        from './chat/chat.component';
import { LoginComponent }       from './login/login.component';
import { RegisterComponent }    from './register/register.component';
import { NavbarComponent }      from './navbar/navbar.component';
import { ProfileComponent }     from './profile/profile.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
        tokenGetter: (() => localStorage.getItem('token')),
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        {
            path: '',
            component: HomeComponent,
            canActivate: [AuthGuard]
        },
        {
            path: 'chat',
            component: ChatComponent,
            canActivate: [AuthGuard]
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        },
        {
            path: ':username',
            component: ProfileComponent,
            canActivate: [AuthGuard]
        },
        {
            path: '**',
            redirectTo: ''
        }
    ])
  ],
  providers: [
      UserService,
      AuthService,
      AuthGuard,
      ContentService,
      {
          provide: AuthHttp,
          useFactory: authHttpServiceFactory,
          deps: [Http, RequestOptions]
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
