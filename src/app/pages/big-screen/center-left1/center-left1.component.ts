import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-center-left1',
  templateUrl: './center-left1.component.html',
  styleUrls: ['./center-left1.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenterLeft1Component implements OnInit {
  options: EChartsOption = {};
  // 下层数据
  dataArr = [
    {
      number: 150,
      text: '今日构建总量',
    },
    {
      number: 144,
      text: '总共完成数量',
    },
    {
      number: 361,
      text: '正在编译数量',
    },
    {
      number: 571,
      text: '未通过数量',
    },
  ];
  // 对应图标
  iconFont = [
    'icon-diagnose',
    'icon-monitoring',
    'icon-cloudupload',
    'icon-clouddownload',
  ];
  private defaultData = {
    xData: ['数据1', '数据2', '数据3', '数据4', '数据5', '数据6'],
    seriesData: [
      { value: 10, name: '数据1' },
      { value: 5, name: '数据2' },
      { value: 15, name: '数据3' },
      { value: 25, name: '数据4' },
      { value: 20, name: '数据5' },
      { value: 35, name: '数据6' },
    ],
  };
  constructor() {}
  ngOnInit() {
    this.updataOptions(this.defaultData);
  }
  private updataOptions(val: { xData: any[]; seriesData: any[] }) {
    this.options = {
      color: [
        '#37a2da',
        '#32c5e9',
        '#9fe6b8',
        '#ffdb5c',
        '#ff9f7f',
        '#fb7293',
        '#e7bcf3',
        '#8378ea',
      ],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      toolbox: {
        show: true,
      },
      calculable: true,
      legend: {
        orient: 'horizontal',
        icon: 'circle',
        bottom: 0,
        data: val.xData,
        textStyle: {
          color: '#fff',
        },
      },
      series: [
        {
          name: '通过率统计',
          type: 'pie',
          radius: [10, 50],
          center: ['50%', '40%'],
          emphasis: {
            disabled: true,
          },
          itemStyle: {
            borderRadius: 5,
          },
          label: {
            show: true,
            color: '#fff',
          },
          data: val.seriesData,
        },
      ],
    };
  }
}
