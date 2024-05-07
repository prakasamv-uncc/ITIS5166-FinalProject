import { Component } from '@angular/core';
import { Constants } from '../../services/_shared/constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../../services/_services/expense.service';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrl: './update-expense.component.scss'
})
export class UpdateExpenseComponent {
  states: any;
  expenseCategory: Array<{ id: number; ename: string; }> = [];
  expenseForm: FormGroup;
  constructor(private expenseService: ExpenseService) {
    this.states = Constants.USA_STATES;
    this.expenseCategory = Constants.BUDGET_CATEGORIES.map(category => ({ id: category.id, ename: category.bname }));

    this.expenseForm = new FormGroup({
      name: new FormControl('', Validators.required),
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
    const selectedDate = new Date(this.expenseForm.value.date.year, this.expenseForm.value.date.month - 1, this.expenseForm.value.date.day);
    console.log(selectedDate);
    const currentExpense = {
      "name": this.expenseForm.value.name,
      "category": this.expenseForm.value.category,
      "amount": this.expenseForm.value.amount,
      "description": this.expenseForm.value.description,
      "date": selectedDate.toISOString(),
      "country": this.expenseForm.value.country,
      "state": this.expenseForm.value.state,
      "city": this.expenseForm.value.city
    }
    console.log(currentExpense);

    this.expenseService.addExpense(currentExpense).subscribe({
      next: (res) => {
        if (res) {
          console.log(res);
          if (res.message === 'success') {
            console.log('Expense updated successfully');
            this.expenseForm.reset();
            this.expenseService.setNewExpenseAdded(true);
        }else {
          console.log('Expense update failed');
        }
      }
      },
      error: (err) => {
        console.log(err);
      }
    })


  }
}
