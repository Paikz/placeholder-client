import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule }                       from '@angular/http';

import { DbService }       from '../services/db.service';
import { DbTestComponent } from './db-test.component';

describe('DbTestComponent', () => {
  let component: DbTestComponent;
  let fixture: ComponentFixture<DbTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ DbTestComponent ],
      providers: [ DbService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
