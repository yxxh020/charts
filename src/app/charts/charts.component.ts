import { Component, AfterViewInit, ElementRef, ViewChild, OnInit, Renderer2 } from '@angular/core';
import * as echarts from 'echarts';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements AfterViewInit {
  @ViewChild('chartContainer', {static: false}) chartContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const chart = echarts.init(this.chartContainer.nativeElement);

    const option = {
      title: {
        text: 'Lifelog Radar Chart',
        textStyle: {
          color: '#333',
          fontSize: 18,
          fontWeight: 'bold'
        }
      },
      tooltip: {},
      legend: {
        data: ['test1'],
        textStyle: {
          color: '#666',
          fontSize: 14
        }
      },
      radar: {
        indicator: [
          {name: 'temp (°C)', max: 100},
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
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#bbb',
            width: 1
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#bbb',
            width: 1,
            type: 'dashed'
          }
        }
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
              itemStyle: {
                color: '#1f7ebd'
              }
            }
          ]
        }
      ]
    };

    chart.setOption(option);
  }

  // ngOnInit() {
  //   this.createRadarChart();
  // }
  //
  // createRadarChart() {
  //   const radarData = {
  //     labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
  //     datasets: [
  //       {
  //         label: 'Dataset 1',
  //         data: [10, 20, 30, 40, 50],
  //         backgroundColor: 'rgba(75, 192, 192, 0.5)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         borderWidth: 1
  //       }
  //     ]
  //   };
  //
  //   const radarOptions = {
  //     responsive: true,
  //     maintainAspectRatio: false
  //   };
  //
  //   const canvas = this.renderer.createElement('canvas');
  //   canvas.id = 'radarChart';
  //   const ctx = canvas.getContext('2d');
  //   this.renderer.appendChild(this.renderer.selectRootElement('#chartContainer'), canvas);
  //   this.chart = new Chart(ctx, {
  //     type: 'radar',
  //     data: radarData,
  //     options: radarOptions
  //   });
}
