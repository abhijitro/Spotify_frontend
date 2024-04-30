import { TestBed } from '@angular/core/testing';

import { PlayDialogService } from './play-dialog.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
describe('PlayDialogService', () => {
  let service: PlayDialogService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MatDialogModule]
    });
    service = TestBed.inject(PlayDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
