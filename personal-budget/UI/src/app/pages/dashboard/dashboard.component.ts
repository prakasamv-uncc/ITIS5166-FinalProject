import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../../services/_services/income.service';
import { set } from 'cypress/types/lodash';
import { BudgetService } from '../../services/_services/budget.service';
import { ExpenseService } from '../../services/_services/expense.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private incomeService: IncomeService, private budgetService:BudgetService, private expenseService:ExpenseService) {}
  public totalMonthlyIncome: number = 0;
  public monthlyIncomeRatio: number = 0;
  public preTotalMonthlyIncome: number = 0;

  public totalMonthlyBudget: number = 0;
  public monthlyBudgetRatio: number = 0;
  public previousTotalMonthlyBudget: number = 0;

  public totalMonthlySavings: number = 0;
  public monthlySavingsRatio: number = 0;
  public previousTotalMonthlySavings: number = 0;

  public totalMonthlyExpense: number = 0;
  public monthlyExpenseRatio: number = 0;
  public previousTotalMonthlyExpense: number = 0;

  ngOnInit(): void {
    this.incomeService.getIncome().subscribe((data) => {
      console.log(data);
    });

    const getCurrentYear = new Date().getFullYear();
    console.log(getCurrentYear);
    const getCurrentMonth = new Date().getMonth() + 1;
    console.log(getCurrentMonth);

    const range = {
      year: getCurrentYear,
      month: getCurrentMonth,
    };
    this.incomeService.getIncomeTotalByMonth(range).subscribe((data) => {
      console.log(data);
      this.totalMonthlyIncome = data?.totalIncome;

      setTimeout(() => {
        const preRange = {
          year: getCurrentYear,
          month: getCurrentMonth - 1,
        };
        if (getCurrentMonth === 1) {
          preRange.year = getCurrentYear - 1;
          preRange.month = 12;
        }
        this.incomeService.getIncomeTotalByMonth(preRange).subscribe((data) => {
          try {
            console.log(data);
            this.preTotalMonthlyIncome = data?.totalIncome;
            if (
              this.preTotalMonthlyIncome !== 0 &&
              this.totalMonthlyIncome !== 0
            ) {
              this.monthlyIncomeRatio = this.calculateRatio(
                this.preTotalMonthlyIncome,
                this.totalMonthlyIncome,
              );
            } else {
              this.monthlyIncomeRatio = 100;
            }
          } catch (error) {
            console.log(error);
            this.preTotalMonthlyIncome = 0;
          }
        });
      }, 1000);
    });

    this.getBudgetByMonth();

    this.getMonthExpenseUser();

  }

  getBudgetByMonth() {

    this.budgetService.getBudgetByCategory().subscribe((data) => {
      console.log(data);
      //this.totalMonthlyBudget = data?.totalBudget;

    });
  }


  getMonthExpenseUser(){
    this.expenseService.getExpenseByUser().subscribe((data) => {
      console.log(data);
      //his.totalMonthlyExpense = data?.totalExpense;
    });
  }

  calculateRatio(lastMonthIncome: number, currentMonthIncome: number): any {
    // Check if lastMonthIncome is not zero to avoid division by zero
    if (lastMonthIncome !== 0) {
      // Calculate the ratio
      const ratio = (currentMonthIncome / lastMonthIncome) * 100;
      return ratio.toFixed(2); // Round to two decimal places
    }
  }
}
