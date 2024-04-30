import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTracksQueryComponent } from './search-tracks-query.component';
import { SideBarComponent } from 'src/app/navigation/side-bar/side-bar.component';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from 'src/app/service/data/authentication.service';

describe('SearchTracksQueryComponent', () => {
  let service: AuthenticationService;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});