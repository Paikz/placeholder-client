import { BrowserModule }            from '@angular/platform-browser';
import { RouterModule }             from '@angular/router';
import { NgModule }                 from '@angular/core';
import { HttpModule }               from '@angular/http';
import { FormsModule }              from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'chat',
            component: ChatComponent
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
