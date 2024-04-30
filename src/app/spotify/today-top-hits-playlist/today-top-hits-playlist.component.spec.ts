import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTopHitsPlaylistComponent } from './today-top-hits-playlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SideBarComponent } from 'src/app/navigation/side-bar/side-bar.component';
import { FooterComponent } from 'src/app/navigation/footer/footer.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('TodayTopHitsPlaylistComponent', () => {
  let component: TodayTopHitsPlaylistComponent;
  let fixture: ComponentFixture<TodayTopHitsPlaylistComponent>;
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
      declarations: [FooterComponent,SideBarComponent,TodayTopHitsPlaylistComponent],
      imports:[RouterModule,MatDialogModule,HttpClientModule],
      providers:[{provide:ActivatedRoute,useValue:fakeActivatedRoute}]
    });
    fixture = TestBed.createComponent(TodayTopHitsPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




  