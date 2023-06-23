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

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "test 1",
          data: [37.2, 80, 12, 98, 8000, 60]
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
      fill: {
        opacity: 0.5,
        colors: [],
        stroke: {
          show: true,
          width: 2,
          colors: [],
          dashArray: 0
        }
      }
    };
  }

  ngOnInit(): void {}

}
