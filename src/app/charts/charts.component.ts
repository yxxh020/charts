import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from "moment";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  markers: ApexMarkers;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
};

export type BarChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
};


export type TimeLineOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public barChartOptions: Partial<BarChartOptions> | any;
  public timeLineOptions: Partial<TimeLineOptions> | any;

  dataValues = [37.2, 80, 12, 98, 8000, 60];
  maxValues = [50, 200, 30, 100, 10000, 100];
  scaledDataValues = this.dataValues.map((value, index) => {
    const min = 0;
    const max = this.maxValues[index];
    const scaledValue = (value - min) / (max - min);
    return scaledValue;
  });

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "test 1",
          data: this.scaledDataValues
        }
      ],
      chart: {
        height: 350,
        type: "radar",
        toolbar: false
      },
      title: {
        text: "Radar Chart"
      },
      xaxis: {
        categories: ['temp (°C)', 'pulse (bpm)', 'breath', 'oxygen (%)', 'step', 'stress']
      },
      yaxis: {
        show: false
      },
      fill: {
        opacity: 0.6,
        colors: ['#DE63C5']
      },
      markers: {
        size: 0
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['#DE63C5'],
        dashArray: 0
      },
      plotOptions: {
        radar: {
          polygons: {
            // strokeColor: '#f8f8f8',
            connectorColors: '#f8f8f8'
          }
        }
      }
    };

    this.barChartOptions = {
      series: [
        {
          name: 'test 2',
          data: this.scaledDataValues,
          color: function({ value, seriesIndex, dataPointIndex }: any) {
            // 정상 범위에 해당하는 값을 체크
            if (dataPointIndex === 0 && value >= 0.38) { // temp(°C)
              return '#FF0000'; // 빨간색으로 설정
            } else if (dataPointIndex === 1 && value >= 0.5) { // pulse(bpm)
              return '#FF0000';
            } else if (dataPointIndex === 2 && value >= 0.8) { // breath
              return '#FF0000';
            } else if (
              dataPointIndex === 3 &&
              (value <= 0.9 || value >= 1) // oxygen(%)
            ) {
              return '#FF0000';
            } else {
              return '#00BFFF'; // default color
            }
          }
        }
      ],
      chart: {
        height: 350,
        type: 'bar',
        toolbar: false
      },
      title: {
        text: 'Bar Chart'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      fill: {
        colors: '#00BFFF'
      },
      xaxis: {
        categories: ['temp (°C)', 'pulse (bpm)', 'breath', 'oxygen (%)', 'step', 'stress'],
        labels: {
          show: false
        }
      },
      yaxis: {
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        enabled: false
      }
    }

    this.timeLineOptions = {
      series: [
        {
          name: "Bob",
          data: [
            {
              x: "Design",
              y: [
                new Date("2019-03-05").getTime(),
                new Date("2019-03-08").getTime()
              ]
            },
            {
              x: "Code",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-11").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-11").getTime(),
                new Date("2019-03-16").getTime()
              ]
            }
          ]
        },
        {
          name: "Joe",
          data: [
            {
              x: "Design",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-05").getTime()
              ]
            },
            {
              x: "Code",
              y: [
                new Date("2019-03-06").getTime(),
                new Date("2019-03-09").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-10").getTime(),
                new Date("2019-03-19").getTime()
              ]
            }
          ]
        }
      ],

      chart: {
        height: 350,
        type: "rangeBar",
        toolbar: {
          show: false
        }
      },
      title: {
        text: 'TimeLine'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },

      dataLabels: {
        enabled: true,
        formatter: function (val: any, opts: any) {
          var seriesName = opts.w.config.series[opts.seriesIndex].name;
          var a = moment(val[0]);
          var b = moment(val[1]);
          var diff = b.diff(a, "days");
          return seriesName + ": " + diff + (diff > 1 ? " days" : " day");
        }
      },

      xaxis: {
        type: "datetime",
        position: "top"
      },

      yaxis: {
        labels: {
          show: true,
          formatter: function (value: any) {
            return value === 'Bob' ? 'Bob' : 'Joe';
          }
        }
      },

      legend: {
        position: 'top'
      }
  };
  }

  ngOnInit(): void {}

}
