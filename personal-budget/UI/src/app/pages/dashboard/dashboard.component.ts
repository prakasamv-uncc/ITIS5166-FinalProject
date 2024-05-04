import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../../services/_services/income.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(private incomeService:IncomeService) { }

  card = [
    {
      title: 'Total Income (Monthly) ',
      amount: '4,42,236',
      background: 'bg-light-primary ',
      border: 'border-primary',
      icon: 'ti ti-trending-up',
      percentage: '59.3%',
      color: 'text-primary',
      number: '35,000'
    },
    {
      title: 'Total Expense (Monthly)',
      amount: '78,250',
      background: 'bg-light-success ',
      border: 'border-success',
      icon: 'ti ti-trending-up',
      percentage: '70.5%',
      color: 'text-success',
      number: '8,900'
    },
    {
      title: 'Total Savings (Monthly)',
      amount: '18,800',
      background: 'bg-light-warning ',
      border: 'border-warning',
      icon: 'ti ti-trending-down',
      percentage: '27.4%',
      color: 'text-warning',
      number: '1,943'
    },
    {
      title: 'Total Budget (Monthly)',
      amount: '$35,078',
      background: 'bg-light-danger ',
      border: 'border-danger',
      icon: 'ti ti-trending-down',
      percentage: '27.4%',
      color: 'text-danger',
      number: '$20,395'
    }
  ];

  ngOnInit(): void {
    this.incomeService.getIncome().subscribe((data) => {
      console.log(data);
    });

    const getCurrentYear = new Date().getFullYear();
    console.log(getCurrentYear);
    const getCurrentMonth = new Date().getMonth()+1;
    console.log(getCurrentMonth);

    const range = {
      'year': getCurrentYear,
      'month': getCurrentMonth
    }
    this.incomeService.getIncomeTotalByMonth(range).subscribe((data) => {
      console.log(data);
    });
  }

}
