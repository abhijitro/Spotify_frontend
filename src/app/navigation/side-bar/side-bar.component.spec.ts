import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from 'src/app/home/home.component';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;
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
      declarations: [HomeComponent,SideBarComponent],
      imports:[HttpClientTestingModule,RouterModule],
      providers:[{provide:ActivatedRoute,useValue:fakeActivatedRoute}]
    });
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
