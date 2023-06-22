import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import EChartsOption = echarts.EChartsOption;
import * as Plotly from 'plotly.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent implements OnInit, AfterViewInit {
  @ViewChild('radarChart', { static: false }) radarChart!: ElementRef;

  public chart: any;

  chartOption: EChartsOption= {
    title: {
      text: 'Lifelog Radar Chart',
      textStyle: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold'
      }},
    tooltip: {},
    legend: {
      data: ['echarts'],
      textStyle: {
        color: '#666',
        fontSize: 14
      }},
    radar: {
      indicator: [
        {name: 'temp (°C)', max: 50},
        {name: 'pulse (bpm)', max: 200},
        {name: 'breath (bpm)', max: 50},
        {name: 'oxygen (%)', max: 100},
        {name: 'step', max: 10000},
        {name: 'stress', max: 100}
      ],
      splitArea: {
        show: true,
        areaStyle: {
          color: ['transparent', 'transparent']
        }},
      axisLine: {
        show: true,
        lineStyle: {
          color: '#bbb',
          width: 1
        }},
      splitLine: {
        show: true,
        lineStyle: {
          color: '#bbb',
          width: 1,
          type: 'dashed'
        }}
    },
    series: [
      {
        name: 'lifelog',
        type: 'radar',
        data: [
          {
            value: [37.2, 80, 12, 98, 8000, 60],
            name: 'test1',
            areaStyle: {
              color: 'rgb(137, 207, 240)'
            },
            lineStyle: {
              color: '#1f7ebd',
              width: 2
            },
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {color: '#1f7ebd'}
          }]
      }]
  };


  constructor() {
  }

  ngOnInit(): void {
    this.createChart();
  }

  ngAfterViewInit(): void {
    this.plotRadarChart();
  }
  //chartjs: The radar chart supports only a single scale.
  createChart() {
    const labels = ['temp (°C)', 'pulse (bpm)', 'breath (bpm)', 'oxygen (%)', 'step', 'stress'];
    const maxValues = [50, 200, 50, 100, 10000, 100];
    const dataValues = [37.2, 80, 12, 98, 8000, 60];

    this.chart = new Chart('MyChart', {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          label: 'chart.js',
          data: dataValues,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          r: {
            pointLabels: {
            },
            ticks: {
              maxTicksLimit: 5,
              // max: Math.max(...maxValues),
              stepSize: 50
            }
          }
        }
      }
    });
  }

  //plotly
  plotRadarChart(): void {
    // const data = [
    //   {
    //     type: 'scatterpolar',
    //     r: [1, 2, 3, 4, 5],
    //     theta: ['A', 'B', 'C', 'D', 'E'],
    //     fill: 'toself'
    //   } as Plotly.Data
    // ];
    //
    // const layout: Partial<Plotly.Layout> = {
    //   polar: {
    //     radialaxis: {
    //       visible: true,
    //       range: [0, 5]
    //     }
    //   },
    //   showlegend: false
    // };
    //
    // Plotly.newPlot(this.radarChart.nativeElement, data, layout);
  }

  //apexcharts

}