import { TestBed } from '@angular/core/testing';

import { IncompleteOnboardingService } from './incomplete-onboarding.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './storage.service';
describe('IncompleteOnboardingService', () => {
  let service: IncompleteOnboardingService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [StorageService]});
    service = TestBed.inject(IncompleteOnboardingService);
  });

  it('should be created', () => {
    //expect(service).to.be.true; // Use the 'to.be.true' assertion
  });
});
