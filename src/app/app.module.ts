import { BrowserModule }            from '@angular/platform-browser';
import { RouterModule }             from '@angular/router';
import { NgModule }                 from '@angular/core';
import { HttpModule }               from '@angular/http';
import { FormsModule }              from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { DbTestComponent } from './db-test/db-test.component';

//Services
import { DbService } from './services/db.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    DbTestComponent
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
        },
        {
          path: 'dbtest',
          component: DbTestComponent
        }
    ])
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
