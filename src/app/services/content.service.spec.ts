import { TestBed, inject } from '@angular/core/testing';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { ContentService } from './content.service';
import { AuthService } from './auth.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

describe('ContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpModule ],
        providers: [ContentService, AuthService,
          {
              provide: AuthHttp,
              useFactory: authHttpServiceFactory,
              deps: [Http, RequestOptions]
          }]
    });
  });

  it('should be created', inject([ContentService], (service: ContentService) => {
    expect(service).toBeTruthy();
  }));
});
