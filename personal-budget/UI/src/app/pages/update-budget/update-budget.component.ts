import { Component } from '@angular/core';
import { Constants } from '../../services/_shared/constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from '../../services/_services/budget.service';

@Component({
  selector: 'app-update-budget',
  templateUrl: './update-budget.component.html',
  styleUrl: './update-budget.component.scss'
})
export class UpdateBudgetComponent {
  budgetForm: FormGroup;
  budgetCategory: Array<{ id: number; bname: string; }> = [
    { id: 1, bname: 'Mortgage' },
    { id: 2, bname: 'Insurance' },
    { id: 3, bname: 'Repairs' },
    { id: 4, bname: 'Services' },
    { id: 5, bname: 'Utilities' },
    { id: 6, bname: 'Taxes' },
    { id: 7, bname: 'Groceries' },
    { id: 8, bname: 'Entertainment' },
    { id: 9, bname: 'Child Care' },
    { id: 10, bname: 'Transportation' },
    { id: 11, bname: 'Health Care' },
    { id: 12, bname: 'Personal Care' },
    { id: 13, bname: 'Clothing' },
    { id: 14, bname: 'Education' },
    { id: 15, bname: 'Donations' },
    { id: 16, bname: 'Savings' },
    { id: 17, bname: 'Investments' },
    { id: 18, bname: 'Retirement' },
    { id: 19, bname: 'Debt' },
    { id: 20, bname: 'Gifts' },
    { id: 21, bname: 'Travel' },
    { id: 22, bname: 'Pets' },
    { id: 23, bname: 'Other' }
  ];
  states: any;

  constructor(private budgetService: BudgetService) {
    this.states = Constants.USA_STATES;
    this.budgetForm = new FormGroup({
      budgetType: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', [Validators.required, Validators.nullValidator]),
      city: new FormControl('', [Validators.required, Validators.nullValidator]),
      amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      description: new FormControl(''),
      date: new FormControl('')
    });
  }

  onSubmit(): void {
    const selectedDate = new Date(this.budgetForm.value.date.year, this.budgetForm.value.date.month - 1, this.budgetForm.value.date.day);
    console.log(selectedDate);
    const currentBudget = {
      "category": this.budgetForm.value.category,
      "amount": this.budgetForm.value.amount,
      "description": this.budgetForm.value.description,
      "date": selectedDate.toISOString(),
      "country": this.budgetForm.value.country,
      "state": this.budgetForm.value.state,
      "city": this.budgetForm.value.city
    }
    console.log(currentBudget);

    this.budgetService.addBudget(currentBudget).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
