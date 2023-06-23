import { Component, OnInit, ViewChild } from '@angular/core';
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

  dataValues = [37.2, 80, 12, 98, 8000, 60];
  maxValues = [50, 200, 20, 100, 10000, 100];
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
        type: "radar"
      },
      title: {
        text: "Lifelog data"
      },
      xaxis: {
        categories: ['temp (°C)', 'pulse (bpm)', 'breath (bpm)', 'oxygen (%)', 'step', 'stress']
      },
      yaxis: {
        show: false
      },
      fill: {
        opacity: 0.6,
        colors: ['#DC143C']
      },
      markers: {
        size: 0
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['#DC143C'],
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
          data: [10, 20, 30, 40, 50, 60]
        }
      ],
      chart: {
        height: 350,
        type: 'bar'
      },
      title: {
        text: 'Bar Chart'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
    }

  }

  ngOnInit(): void {}

}
