import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMusicComponent } from './play-music.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('PlayMusicComponent', () => {
  let component: PlayMusicComponent;
  let fixture: ComponentFixture<PlayMusicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayMusicComponent],
      providers:[{provide:MatDialogRef,useValue:{}},
        {provide:MAT_DIALOG_DATA,useValue:{}}],

    });
    fixture = TestBed.createComponent(PlayMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
