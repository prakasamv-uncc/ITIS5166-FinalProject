import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/_services/auth.service';
import { MatStepper } from '@angular/material/stepper';
import { Constants } from '../../services/_shared/constants';
import { IncomeService } from '../../services/_services/income.service';
import { BudgetService } from '../../services/_services/budget.service';
import { ExpenseService } from '../../services/_services/expense.service';
import { StorageService } from '../../services/_services/storage.service';

@Component({
  selector: 'app-registration-stepper',
  templateUrl: './registration-stepper.component.html',
  styleUrl: './registration-stepper.component.scss',
})
export class RegistrationStepperComponent {
  isLinear = true;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  registrationForm = this._formBuilder.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
      confirmPassword: ['', Validators.required],
    },
    { validators: [this.Validation('password', 'confirmPassword')] },
  );

  addIncomeForm = this._formBuilder.group({
    incomeType: ['', Validators.required],
    country: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    amount: ['',
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ],
    description:['', Validators.required],
    category: ['', Validators.required],
    date: ['', Validators.required],
  });

  addBudgetForm = this._formBuilder.group({
    budgetType: '',
    category: '',
    country: '',
    state: '',
    city: '',
    amount: '',
    description: '',
    date: '',
  });

  addExpenseForm = this._formBuilder.group({
    expenseType: '',
    country: '',
    state: '',
    city: '',
    amount: '',
    description: '',
    category: '',
    date: '',
  });
  states: any;
  incomeCategory: any;
  budgetCategory: any;
  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private incomeService: IncomeService,
    private budgetService: BudgetService,
    private expenseService: ExpenseService,
    private storageService: StorageService,
  ) {
    this.states = Constants.USA_STATES;
    this.incomeCategory = Constants.INCOME_CATEGORIES;
    this.budgetCategory = Constants.BUDGET_CATEGORIES;
  }

  Validation(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }

  onRegistrationSubmit(stepper: MatStepper): void {
    console.log(this.registrationForm.value);
    //const userName:string = this.registrationForm.value.name ?? '';

    const { name, email, password } = this.registrationForm.value;

    if (name && email && password) {
      this.authService.register(name, email, password).subscribe({
        next: (data: any) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;

          this.storageService.saveUser(data);
          this.authService.setLoggedIn(true);
          //stepper.next();
        },
        error: (err: any) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        },
      });
    } else {
      console.log('Please fill in all the required fields');
    }
  }

  onIncomeSubmit(): void {
    console.log(this.addIncomeForm.value);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth()-1;
    const currentDay = new Date().getDate();


    const selectedDate = new Date(
      currentYear,
      currentMonth,
      currentDay,
    );

    console.log(selectedDate.toDateString());
    const currentIncome = {
      incomeType: this.addIncomeForm.value.incomeType,
      country: this.addIncomeForm.value.country,
      state: this.addIncomeForm.value.state,
      city: this.addIncomeForm.value.city,
      amount: this.addIncomeForm.value.amount,
      description: this.addIncomeForm.value.description,
      category: this.addIncomeForm.value.category,
      date: selectedDate.toISOString(),
    };
    this.incomeService.addIncome(currentIncome).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.status === 'success') {
         // this.addIncomeForm.reset();
          this.incomeService.setNewIncomeAdded(true);
          //this.isUpdateFailed = false;
          //this.isSuccessful = true;
          //this.router.navigate(['/dashboard']);
        }
      },
      error: (err: any) => {
        //this.errorMessage = err.error.message;
        //this.isUpdateFailed = true;
      },
    });
  }

  onAddBudgetSubmit(): void {
    console.log(this.addBudgetForm.value);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth()-1;
    const currentDay = new Date().getDate();

    const selectedDate = new Date(
      currentYear,
      currentMonth,
      currentDay,
    );

    console.log(selectedDate.toDateString());
    const currentBudget = {
      category: this.addBudgetForm.value.category,
      amount: this.addBudgetForm.value.amount,
      description: this.addBudgetForm.value.description,
      date: selectedDate.toISOString(),
      country: this.addBudgetForm.value.country,
      state: this.addBudgetForm.value.state,
      city: this.addBudgetForm.value.city,
    };
    this.budgetService.addBudget(currentBudget).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
