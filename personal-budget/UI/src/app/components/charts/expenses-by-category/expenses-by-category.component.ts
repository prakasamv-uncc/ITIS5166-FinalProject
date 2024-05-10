import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-expenses-by-category',
  templateUrl: './expenses-by-category.component.html',
  styleUrl: './expenses-by-category.component.scss'
})
export class ExpensesByCategoryComponent implements OnInit{
  public chart: any;
  constructor() {
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){

    this.chart = new Chart("MyChart1", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Mortgage', 'Insurance','Groceries','Entertainment','Health Care','Investments', ],
	       datasets: [{
    label: 'Category Expenses',
    data: [300, 240, 100, 432, 253, 34],
    backgroundColor: [
      '#1c394f',
      '#EA5504',
      '#04dcc4',
			'#A6C3E9',
      '#4CA9EE',
      '#1C428B',
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}
