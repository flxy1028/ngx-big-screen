import { EChartsOption } from 'echarts';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
const lineStyle = {
  width: 1,
  opacity: 0.5,
};
@Component({
  selector: 'app-center-right',
  templateUrl: './center-right.component.html',
  styleUrls: ['./center-right.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenterRightComponent implements OnInit {
  config: any = {
    data: [
      {
        name: '南阳',
        value: 167,
      },
      {
        name: '周口',
        value: 67,
      },
      {
        name: '漯河',
        value: 123,
      },
      {
        name: '郑州',
        value: 55,
      },
      {
        name: '西峡',
        value: 98,
      },
    ],
  };
  options: EChartsOption = {};
  cdata = {
    indicatorData: [
      { name: '数据1', max: 300 },
      { name: '数据2', max: 250 },
      { name: '数据3', max: 300 },
      { name: '数据4', max: 5 },
      { name: '数据5', max: 200 },
      { name: '数据6', max: 100 },
    ],
    dataBJ: [
      [94, 69, 114, 2.08, 73, 39, 22],
      [99, 73, 110, 2.43, 76, 48, 23],
      [31, 12, 30, 0.5, 32, 16, 24],
      [42, 27, 43, 1, 53, 22, 25],
      [154, 117, 157, 3.05, 92, 58, 26],
      [234, 185, 230, 4.09, 123, 69, 27],
      [160, 120, 186, 2.77, 91, 50, 28],
    ],
    dataGZ: [
      [84, 94, 140, 2.238, 68, 18, 22],
      [93, 77, 104, 1.165, 53, 7, 23],
      [99, 130, 227, 3.97, 55, 15, 24],
      [146, 84, 139, 1.094, 40, 17, 25],
      [113, 108, 137, 1.481, 48, 15, 26],
      [81, 48, 62, 1.619, 26, 3, 27],
      [56, 48, 68, 1.336, 37, 9, 28],
    ],
    dataSH: [
      [91, 45, 125, 0.82, 34, 23, 1],
      [65, 27, 78, 0.86, 45, 29, 2],
      [83, 60, 84, 1.09, 73, 27, 3],
      [109, 81, 121, 1.28, 68, 51, 4],
      [106, 77, 114, 1.07, 55, 51, 5],
      [109, 81, 121, 1.28, 68, 51, 6],
      [106, 77, 114, 1.07, 55, 51, 7],
    ],
  };
  constructor() {}

  ngOnInit() {
    this.updateOptions();
  }
  updateOptions() {
    const { cdata } = this;
    this.options = {
      radar: {
        indicator: cdata.indicatorData,
        shape: 'circle',
        splitNumber: 5,
        radius: ['0%', '65%'],
        // name: {
        //   color: 'rgb(238, 197, 102)',
        // },
        splitLine: {
          lineStyle: {
            color: [
              'rgba(238, 197, 102, 0.1)',
              'rgba(238, 197, 102, 0.2)',
              'rgba(238, 197, 102, 0.4)',
              'rgba(238, 197, 102, 0.6)',
              'rgba(238, 197, 102, 0.8)',
              'rgba(238, 197, 102, 1)',
            ].reverse(),
          },
        },
        splitArea: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(238, 197, 102, 0.5)',
          },
        },
        axisLabel: {
          color: 'rgb(238, 197, 102)',
        },
      },
      series: [
        {
          name: '北京',
          type: 'radar',
          lineStyle: lineStyle,
          data: cdata.dataBJ,
          symbol: 'none',
          itemStyle: {
            color: '#F9713C',
          },
          areaStyle: {
            opacity: 0.1,
          },
        },
        {
          name: '上海',
          type: 'radar',
          lineStyle: lineStyle,
          data: cdata.dataSH,
          symbol: 'none',
          itemStyle: {
            color: '#B3E4A1',
          },
          areaStyle: {
            opacity: 0.05,
          },
        },
        {
          name: '广州',
          type: 'radar',
          lineStyle: lineStyle,
          data: cdata.dataGZ,
          symbol: 'none',
          itemStyle: {
            color: 'rgb(238, 197, 102)',
          },
          areaStyle: {
            opacity: 0.05,
          },
        },
      ],
    };
  }
}
