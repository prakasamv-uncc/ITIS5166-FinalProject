import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import ApexCharts from 'apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexGrid,
  ApexLegend
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: string[];
  stroke: ApexStroke;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  legend: ApexLegend;
};

@Component({
  selector: 'app-weeklyoverview',
  templateUrl: './weeklyoverview.component.html',
  styleUrl: './weeklyoverview.component.scss'
})
export class WeeklyoverviewComponent {
// public props
//@ViewChild('chart') chart: ChartComponent;
chartOptions_4: Partial<ChartOptions>;
chartOptions_5: Partial<ChartOptions>;
chartOptions_6: Partial<ChartOptions>;
// eslint-disable-next-line
monthChart: any;
// eslint-disable-next-line
weekChart: any;

// constructor
constructor() {
  this.chartOptions_4 = {
    chart: {
      type: 'bar',
      height: 365,
      toolbar: {
        show: false
      }
    },
    colors: ['#13c2c2'],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        data: [80, 95, 70, 42, 65, 55, 78]
      }
    ],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    grid: {
      show: false
    }
  };
  this.chartOptions_5 = {
    chart: {
      type: 'line',
      height: 340,
      toolbar: {
        show: false
      }
    },
    colors: ['#faad14'],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        borderRadius: 4
      }
    },
    stroke: {
      curve: 'smooth',
      width: 1.5
    },
    grid: {
      strokeDashArray: 4
    },
    series: [
      {
        data: [58, 90, 38, 83, 63, 75, 35, 55]
      }
    ],
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-05-19T00:00:00.000Z',
        '2018-06-19T00:00:00.000Z',
        '2018-07-19T01:30:00.000Z',
        '2018-08-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-10-19T04:30:00.000Z',
        '2018-11-19T05:30:00.000Z',
        '2018-12-19T06:30:00.000Z'
      ],
      labels: {
        format: 'MMM'
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };
  this.chartOptions_6 = {
    chart: {
      type: 'bar',
      height: 430,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
        borderRadius: 4
      }
    },
    stroke: {
      show: true,
      width: 8,
      colors: ['transparent']
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      show: true,
      fontFamily: `'Public Sans', sans-serif`,
      offsetX: 10,
      offsetY: 10,
      labels: {
        useSeriesColors: false
      },
      markers: {
        width: 10,
        height: 10,
        radius: 50
      },
      itemMargin: {
        horizontal: 15,
        vertical: 5
      }
    },
    colors: ['#faad14', '#1890ff'],
    series: [
      {
        name: 'Net Profit',
        data: [180, 90, 135, 114, 120, 145]
      },
      {
        name: 'Revenue',
        data: [120, 45, 78, 150, 168, 99]
      }
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    }
  };
}

// life cycle event
ngOnInit(): void {
  /* setTimeout(() => {
    this.weekChart = new ApexCharts(document.querySelector('#visitor-chart'), this.weekOptions);
    this.weekChart.render();
  }, 500); */
}

// public method
onNavChange(changeEvent: NgbNavChangeEvent) {
 /*  if (changeEvent.nextId === 1) {
    setTimeout(() => {
      this.weekChart = new ApexCharts(document.querySelector('#visitor-chart'), this.weekOptions);
      this.weekChart.render();
    }, 200);
  }

  if (changeEvent.nextId === 2) {
    setTimeout(() => {
      this.monthChart = new ApexCharts(document.querySelector('#visitor-chart-1'), this.monthOptions);
      this.monthChart.render();
    }, 200);
  } */
}

monthOptions = {
  chart: {
    height: 450,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#1890ff', '#13c2c2'],
  series: [
    {
      name: 'Page Views',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
    },
    {
      name: 'Sessions',
      data: [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
    }
  ],
  stroke: {
    curve: 'smooth',
    width: 2
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }
};

weekOptions = {
  chart: {
    height: 450,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#1890ff', '#13c2c2'],
  series: [
    {
      name: 'Page Views',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'Sessions',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ],
  stroke: {
    curve: 'smooth',
    width: 2
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }
};



transaction = [
  {
    background: 'text-success bg-light-success',
    icon: 'ti ti-gift',
    title: 'Order #002434',
    time: 'Today, 2:00 AM',
    amount: '+ $1,430',
    percentage: '78%'
  },
  {
    background: 'text-primary bg-light-primary',
    icon: 'ti ti-message-circle',
    title: 'Order #984947',
    time: '5 August, 1:45 PM',
    amount: '- $302',
    percentage: '8%'
  },
  {
    background: 'text-danger bg-light-danger',
    icon: 'ti ti-settings',
    title: 'Order #988784',
    time: '7 hours ago',
    amount: '- $682',
    percentage: '16%'
  }
];

tableData = [
  {
    "id": "84564564",
    "name": "Camera Lens",
    "order": "40",
    "status": "Rejected",
    "status_type": "ti ti-circle-x text-danger",
    "amount": "$40,570"
  },
  {
    "id": "84564786",
    "name": "Laptop",
    "order": "300",
    "status": "Pending",
    "status_type": "ti ti-alert-circle text-warning",
    "amount": "$180,139"
  },
  {
    "id": "84564522",
    "name": "Mobile",
    "order": "355",
    "status": "Approved",
    "status_type": "ti ti-circle-check text-success",
    "amount": "$50,139"
  },
  {
    "id": "84564564",
    "name": "Camera Lens",
    "order": "40",
    "status": "Rejected",
    "status_type": "ti ti-circle-x text-danger",
    "amount": "$40,570"
  },
  {
    "id": "84564786",
    "name": "Laptop",
    "order": "300",
    "status": "Pending",
    "status_type": "ti ti-alert-circle text-warning",
    "amount": "$180,139"
  },
  {
    "id": "84564522",
    "name": "Mobile",
    "order": "355",
    "status": "Approved",
    "status_type": "ti ti-circle-check text-success",
    "amount": "$50,139"
  },
  {
    "id": "84564564",
    "name": "Camera Lens",
    "order": "40",
    "status": "Rejected",
    "status_type": "ti ti-circle-x text-danger",
    "amount": "$40,570"
  },
  {
    "id": "84564786",
    "name": "Laptop",
    "order": "300",
    "status": "Pending",
    "status_type": "ti ti-alert-circle text-warning",
    "amount": "$180,139"
  },
  {
    "id": "84564522",
    "name": "Mobile",
    "order": "355",
    "status": "Approved",
    "status_type": "ti ti-circle-check text-success",
    "amount": "$50,139"
  },
  {
    "id": "84564786",
    "name": "Laptop",
    "order": "300",
    "status": "Pending",
    "status_type": "ti ti-alert-circle text-warning",
    "amount": "$180,139"
  }
];

tables = this.tableData;
}
