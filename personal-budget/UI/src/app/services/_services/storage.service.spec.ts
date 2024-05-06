import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { HttpClientModule } from '@angular/common/http';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [StorageService]});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
