import { BrowserModule }            from '@angular/platform-browser';
import { RouterModule }             from '@angular/router';
import { NgModule }                 from '@angular/core';
import { HttpModule }               from '@angular/http';
import { FormsModule }              from '@angular/forms';
import { ReactiveFormsModule }      from '@angular/forms';

//Services
import { DbService } from './services/db.service';
import { UserService } from './services/user.service';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { DbTestComponent } from './db-test/db-test.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    DbTestComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'chat',
            component: ChatComponent
        },
        {
          path: 'dbtest',
          component: DbTestComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        }
    ])
  ],
  providers: [DbService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
