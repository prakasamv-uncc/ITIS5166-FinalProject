import { Component } from '@angular/core';
import { IncomeService } from '../../services/_services/income.service';
import { Constants } from '../../services/_shared/constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-income',
  templateUrl: './update-income.component.html',
  styleUrl: './update-income.component.scss'
})
export class UpdateIncomeComponent {
  incomeForm: FormGroup;

states:any;
  incomeCategory: Array<{ id: number; cname: string; }> = [
    { id: 1, cname: 'Salary' },
    { id: 2, cname: 'Bonus' },
    { id: 3, cname: 'Investment' },
    { id: 4, cname: 'Other' }
  ];



  constructor(private incomeService: IncomeService ) {
    this.states = Constants.USA_STATES;

    this.incomeForm = new FormGroup({
      incomeType: new FormControl(''),
      country: new FormControl('', Validators.required),
      state: new FormControl('', [Validators.required, Validators.nullValidator]),
      city: new FormControl('', [Validators.required, Validators.nullValidator]),
      amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      description: new FormControl(''),
      category: new FormControl(''),
      date: new FormControl('')
    });
   }

  onSubmit(): void {

   /*  if (this.incomeForm.invalid) {
      return;
    } */
    console.log(JSON.stringify(this.incomeForm.value, null, 2));


   const selectedDate = new Date(this.incomeForm.value.date.year, this.incomeForm.value.date.month - 1, this.incomeForm.value.date.day);


    console.log(selectedDate.toDateString());
const currentIncome = {
  "incomeType": this.incomeForm.value.incomeType,
  "country": this.incomeForm.value.country,
  "state":  this.incomeForm.value.state,
  "city": this.incomeForm.value.city,
  "amount": this.incomeForm.value.amount,
  "description": this.incomeForm.value.description,
  "category": this.incomeForm.value.category,
  "date": selectedDate.toISOString()
}
    this.incomeService.addIncome(currentIncome).subscribe({
      next: (data:any) => {
        console.log(data);
        if(data.message === 'success'){
          console.log('Income added successfully');
          this.incomeForm.reset();
          this.incomeService.setNewIncomeAdded(true);
        }

      },
      error: (err:any) => {
        console.log(err);
      }
    });
}
}
