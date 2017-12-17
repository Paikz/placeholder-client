import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-db-test',
  templateUrl: './db-test.component.html',
  styleUrls: ['./db-test.component.less']
})
export class DbTestComponent implements OnInit {

  users: any;

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.dbService
      .getUsers()
      .then( res => this.users = res)
  }

}
