import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverWeeklyPlaylistComponent } from './discover-weekly-playlist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from 'src/app/navigation/footer/footer.component';
import { SideBarComponent } from 'src/app/navigation/side-bar/side-bar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('DiscoverWeeklyPlaylistComponent', () => {
  let component: DiscoverWeeklyPlaylistComponent;
  let fixture: ComponentFixture<DiscoverWeeklyPlaylistComponent>;
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
      declarations: [SideBarComponent,FooterComponent,DiscoverWeeklyPlaylistComponent],
      imports:[RouterModule,MatDialogModule,HttpClientModule],
      providers:[{provide:ActivatedRoute,useValue:fakeActivatedRoute}]
    });
    fixture = TestBed.createComponent(DiscoverWeeklyPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
