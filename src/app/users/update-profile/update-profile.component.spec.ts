import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileComponent } from './update-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SideBarComponent } from 'src/app/navigation/side-bar/side-bar.component';
import { FooterComponent } from 'src/app/navigation/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('UpdateProfileComponent', () => {
  let component: UpdateProfileComponent;
  let fixture: ComponentFixture<UpdateProfileComponent>;
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
      declarations: [SideBarComponent,FooterComponent,UpdateProfileComponent],
      imports:[HttpClientTestingModule,MatCardModule,MatInputModule,MatFormFieldModule,MatNativeDateModule,MatDatepickerModule,BrowserModule,ReactiveFormsModule,BrowserAnimationsModule,RouterModule],
      providers:[{provide:ActivatedRoute,useValue:fakeActivatedRoute}]
    });
    fixture = TestBed.createComponent(UpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
