import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BudgetService } from './budget.service';

describe('BudgetService', () => {
  let service: BudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BudgetService]
    });
    service = TestBed.inject(BudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
