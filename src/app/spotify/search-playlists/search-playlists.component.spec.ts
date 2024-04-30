import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlaylistsComponent } from './search-playlists.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from 'src/app/navigation/side-bar/side-bar.component';
import { FooterComponent } from 'src/app/navigation/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('SearchPlaylistsComponent', () => {
  let component: SearchPlaylistsComponent;
  let fixture: ComponentFixture<SearchPlaylistsComponent>;
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
      declarations: [SideBarComponent,FooterComponent,SearchPlaylistsComponent],
      imports:[RouterModule,FormsModule,HttpClientModule],
      providers:[{provide:ActivatedRoute,useValue:fakeActivatedRoute}]
    });
    fixture = TestBed.createComponent(SearchPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
