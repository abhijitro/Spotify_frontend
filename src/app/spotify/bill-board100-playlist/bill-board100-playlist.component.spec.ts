import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillBoard100PlaylistComponent } from './bill-board100-playlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SideBarComponent } from 'src/app/navigation/side-bar/side-bar.component';
import { FooterComponent } from 'src/app/navigation/footer/footer.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('BillBoard100PlaylistComponent', () => {
  let component: BillBoard100PlaylistComponent;
  let fixture: ComponentFixture<BillBoard100PlaylistComponent>;
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
      declarations: [SideBarComponent,FooterComponent,BillBoard100PlaylistComponent],
      imports:[RouterModule,MatDialogModule,HttpClientModule],
      providers:[{provide:ActivatedRoute,useValue:fakeActivatedRoute}]
    });
    fixture = TestBed.createComponent(BillBoard100PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
