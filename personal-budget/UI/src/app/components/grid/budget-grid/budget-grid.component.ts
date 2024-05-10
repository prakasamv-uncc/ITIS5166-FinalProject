import { Component, Directive, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as d3 from 'd3';

interface Country {
	id: number;
	name: string;
	flag: string;
	area: number;
	population: number;
}

const COUNTRIES: Country[] = [
	{
		id: 1,
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		id: 2,
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		id: 3,
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		id: 4,
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

export interface SortEvent {
	column: SortColumn;
	direction: SortDirection;
}

@Directive({
	selector: 'th[sortable]',
	standalone: true,
	host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()',
	},
})
export class NgbdSortableHeader {
	@Input() sortable: SortColumn = '';
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<SortEvent>();

	rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.sortable, direction: this.direction });
	}
}

@Component({
  selector: 'app-budget-grid',
  templateUrl: './budget-grid.component.html',
  styleUrl: './budget-grid.component.scss'
})
export class BudgetGridComponent {

  @ViewChild('chart', { static: true }) public chartContainer!: ElementRef;

  constructor() { }

  ngOnInit() {
    this.createBubbleChart();
  }
private createBubbleChart(): void {
  const data = [
    { State: 'State1', Area: 100, Expense: 500 },
    { State: 'State2', Area: 150, Expense: 700 },
    { State: 'State3', Area: 120, Expense: 600 },
    // Add more data as needed
  ];

  const margin = { top: 20, right: 20, bottom: 70, left: 40 };
  const width = 700 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const svg = d3.select(this.chartContainer.nativeElement)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  const x = d3.scaleLinear().range([0, width]);
  const y = d3.scaleLinear().range([height, 0]);
  const r = d3.scaleLinear().range([2, 20]);

  x.domain([0, d3.max(data, d => Number(d.State)) as number]); // Convert the value to number
  y.domain([0, d3.max(data, d => Number(d.Area)) as number]); // Convert the value to number
  r.domain([0, d3.max(data, d => Number(d.Expense)) as number]); // Convert the value to number

  svg.selectAll('circle')
    .data(data)
    .enter().append('circle')
    .attr('cx', d => x(Number(d.State))) // Convert the value to number
    .attr('cy', d => y(Number(d.Area))) // Convert the value to number
    .attr('r', d => r(Number(d.Expense))) // Convert the value to number
    .style('fill', 'steelblue');

  svg.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x));

  svg.append('g')
    .call(d3.axisLeft(y));

  svg.append('text')
    .attr('x', width / 2)
    .attr('y', height + margin.top + 10)
    .style('text-anchor', 'middle')
    .text('State');

  svg.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 0 - margin.left)
    .attr('x', 0 - (height / 2))
    .attr('dy', '1em')
    .style('text-anchor', 'middle')
    .text('Area');

  svg.append('text')
    .attr('transform', 'translate(' + (width - 505) + ',' + (height + margin.bottom - 5) + ')')
    .style('text-anchor', 'middle')
    .text('Expense');
}
}
