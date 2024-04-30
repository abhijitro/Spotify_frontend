// play-dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Track } from 'src/app/model/Track';
import { PlayMusicComponent } from 'src/app/spotify/play-music/play-music.component';

@Injectable({
  providedIn: 'root'
})
export class PlayDialogService {
  private matDialog:MatDialog
  constructor(private dialog: MatDialog) {
     this.matDialog=dialog;
  }

  openPlayDialog(tracks: Track): void {
    this.dialog.open(PlayMusicComponent, {
      data: { track:tracks },
      width: '70%',
    });
  }
}
