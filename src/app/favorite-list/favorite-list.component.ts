import { state } from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { SpotifyPlaylist } from '../model/SpotifyPlaylist';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../service/data/music-data.service';
import { WishlistDataService } from '../service/data/wishlist-data.service';
import { Item } from '../model/Item';
import { Track } from '../model/Track';
import { PlayDialogService } from '../service/component/play-dialog.service';
import { BehaviorSubject } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
})
export class FavoriteListComponent implements AfterViewInit {
  // tracks!: Track[]; // Adjust the type accordingly
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'position',
    'image',
    'name',
    'artist',
    'play',
    'action',
  ];

  tracks = new BehaviorSubject<Track[]>([]);
  tracks$ = this.tracks.asObservable();

  constructor(
    private route: ActivatedRoute,
    private wishList: WishlistDataService,
    private cdr: ChangeDetectorRef,
    private playDialogService: PlayDialogService
  ) {}

  openPlayDialog(track: Track): void {
    this.playDialogService.openPlayDialog(track);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.wishlists();
  }

  wishlists() {
    this.wishList.getUserWishList().subscribe({
      next: (v) => {
        this.tracks.next(v.tracks);
        this.cdr.detectChanges();
      },
      error: (e) => console.error(e),
      complete: () => {
        this.tracks$.subscribe((t) => {
          this.dataSource = new MatTableDataSource(t);
        })
        this.dataSource.paginator = this.paginator;
      },
    });
  }

  deleteTrackToWishList(id: string) {
    this.wishList.deleteTrackByUsernameAndTrackId(id).subscribe({
      next: (a) => {
        console.log(a);
      },
      error: (err) => {
          if(err.status === 200) {
            this.wishlists();
          }
      },
      complete: () => {
        this.wishlists();
      },
    });
  }

  playTrack(track: Track) {
    // Implement your play track logic here
    const link = track.external_urls.spotify;
    window.open(link, '_blank');
  }
}
