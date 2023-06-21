import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements AfterViewInit {
  @ViewChild('chartContainer', {static: false}) chartContainer!: ElementRef;

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
}

