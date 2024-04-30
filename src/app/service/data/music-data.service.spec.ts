import { TestBed } from '@angular/core/testing';

import { MusicDataService } from './music-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('MusicDataService', () => {
  let service: MusicDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(MusicDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
