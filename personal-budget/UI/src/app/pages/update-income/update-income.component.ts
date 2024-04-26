import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { IncomeService } from '../../services/_services/income.service';
import { Constants } from '../../services/_shared/constants';


@Component({
  selector: 'app-update-income',
  templateUrl: './update-income.component.html',
  styleUrl: './update-income.component.scss'
})
export class UpdateIncomeComponent {
  //private model: NgbDateStruct
states:any;
  incomeCategory: Array<{ id: number; cname: string; }> = [
    { id: 1, cname: 'Salary' },
    { id: 2, cname: 'Bonus' },
    { id: 3, cname: 'Investment' },
    { id: 4, cname: 'Other' }
  ];



  constructor(private incomeService: IncomeService) {
    this.states = Constants.USA_STATES;
   }

  onSubmit(incomeForm: any): void {
   // const {incomeType, incomeCategory, incomeAmount, incomeDate } = this.form;
   //  const parsDate = new Date(incomeDate.year, incomeDate.month - 1, incomeDate.day);
const currentIncome = {
  "incomeType": incomeForm.value.incomeType,
  "country": incomeForm.value.country,
  "state":  incomeForm.value.state,
  "city": incomeForm.value.city,
  "amount": incomeForm.value.amount,
  "description": incomeForm.value.description,
  "category": incomeForm.value.category,
  "date": new Date(incomeForm.value.date.year, incomeForm.value.date.month - 1, incomeForm.value.date.day)
}
    this.incomeService.addIncome(currentIncome).subscribe({
      next: (data:any) => {
        console.log(data);
      },
      error: (err:any) => {
        //this.errorMessage = err.error.message;
        //this.isUpdateFailed = true;
      }
    });
}
}
