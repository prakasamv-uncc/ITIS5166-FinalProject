/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStepperComponent } from './registration-stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbDatepickerModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { IncomeService } from '../../services/_services/income.service';
import { BudgetService } from '../../services/_services/budget.service';
import { ExpenseService } from '../../services/_services/expense.service';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RegistrationStepperComponent', () => {
  let component: RegistrationStepperComponent;
  let fixture: ComponentFixture<RegistrationStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,HttpClientModule,NgbModule,MatStepperModule,
        MatLabel,MatFormField,NgbNavModule,MatFormFieldControl,NgbDatepickerModule ],
        schemas: [NO_ERRORS_SCHEMA], // Ignore unknown elements and directives

      declarations: [RegistrationStepperComponent],
      providers:[IncomeService, BudgetService,ExpenseService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */
