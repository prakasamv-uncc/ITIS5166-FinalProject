/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UpdateExpenseComponent } from './update-expense.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('UpdateExpenseComponent', () => {
  let component: UpdateExpenseComponent;
  let fixture: ComponentFixture<UpdateExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, NgbDatepickerModule, NgbModule],
      declarations: [UpdateExpenseComponent],
      schemas: [NO_ERRORS_SCHEMA], // Ignore unknown elements and directives

    }).compileComponents();

    fixture = TestBed.createComponent(UpdateExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize states', () => {
    expect(component.states).toBeDefined();
  });

  it('should initialize expenseCategory', () => {
    expect(component.expenseCategory).toBeDefined();
    expect(component.expenseCategory.length).toBeGreaterThan(0);
  });

  it('should call onSubmit method', () => {
    spyOn(console, 'log');
    const expenseForm = {
      value: {
        category: 'Food',
        amount: 100,
        description: 'Lunch',
        date: { year: 2022, month: 1, day: 1 },
        country: 'USA',
        state: 'NC',
        city: 'Charlotte'
      }
    };
    component.onSubmit(expenseForm);
    expect(console.log).toHaveBeenCalledWith({
      category: 'Food',
      amount: 100,
      description: 'Lunch',
      date: new Date(2022, 0, 1),
      country: 'USA',
      state: 'NC',
      city: 'Charlotte'
    });
  });
});
 */
