import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { IncomeService } from './income.service';

describe('IncomeService', () => {
  let service: IncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [IncomeService]});
    service = TestBed.inject(IncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
