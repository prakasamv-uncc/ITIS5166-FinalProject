import { Component } from '@angular/core';
import { Constants } from '../../services/_shared/constants';

@Component({
  selector: 'app-update-budget',
  templateUrl: './update-budget.component.html',
  styleUrl: './update-budget.component.scss'
})
export class UpdateBudgetComponent {
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

  constructor() {
    this.states = Constants.USA_STATES;
  }

  onSubmit(budgetForm: any): void {
    const selectedDate = new Date(budgetForm.value.date.year, budgetForm.value.date.month - 1, budgetForm.value.date.day);
    console.log(selectedDate);
    const currentBudget = {
      "category": budgetForm.value.category,
      "amount": budgetForm.value.amount,
      "description": budgetForm.value.description,
      "date": new Date(budgetForm.value.date.year, budgetForm.value.date.month - 1, budgetForm.value.date.day),
      "country": budgetForm.value.country,
      "state": budgetForm.value.state,
      "city": budgetForm.value.city
    }
    console.log(currentBudget);
  }
}
