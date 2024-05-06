import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBudgetComponent } from './update-budget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BudgetService } from '../../services/_services/budget.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('UpdateBudgetComponent', () => {
  let component: UpdateBudgetComponent;
  let fixture: ComponentFixture<UpdateBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,HttpClientModule,NgbDatepickerModule,NgbModule],
      declarations: [UpdateBudgetComponent],
      providers: [BudgetService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
