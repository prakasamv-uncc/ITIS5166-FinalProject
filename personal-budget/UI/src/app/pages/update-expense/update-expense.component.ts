import { Component } from '@angular/core';
import { Constants } from '../../services/_shared/constants';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrl: './update-expense.component.scss'
})
export class UpdateExpenseComponent {
  states: any;
  expenseCategory: Array<{ id: number; ename: string; }> = [];

  constructor() {
    this.states = Constants.USA_STATES;
    this.expenseCategory = Constants.BUDGET_CATEGORIES.map(category => ({ id: category.id, ename: category.bname }));
  }

  onSubmit(expenseForm: any): void {
    const currentExpense = {
      "category": expenseForm.value.category,
      "amount": expenseForm.value.amount,
      "description": expenseForm.value.description,
      "date": new Date(expenseForm.value.date.year, expenseForm.value.date.month - 1, expenseForm.value.date.day),
      "country": expenseForm.value.country,
      "state": expenseForm.value.state,
      "city": expenseForm.value.city
    }
    console.log(currentExpense);
  }
}
