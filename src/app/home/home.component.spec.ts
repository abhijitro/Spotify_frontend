import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../service/data/authentication.service';
import { MatDialogModule } from '@angular/material/dialog';
import { SideBarComponent } from '../navigation/side-bar/side-bar.component';
import { FooterComponent } from '../navigation/footer/footer.component';
import { TodayTopHitsPlaylistComponent } from '../spotify/today-top-hits-playlist/today-top-hits-playlist.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let fakeActivatedRoute={
    snapshot:{
      paramMap:{
        get:()=>{
          return '786';
        }
      }
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayTopHitsPlaylistComponent,FooterComponent,SideBarComponent,HomeComponent],
      imports:[RouterModule,HttpClientTestingModule,MatDialogModule],
      providers:[{provide:ActivatedRoute,useValue:fakeActivatedRoute}]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
