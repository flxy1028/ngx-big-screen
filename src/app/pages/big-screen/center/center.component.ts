import { EChartsOption } from 'echarts';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenterComponent implements OnInit {
  titleDate = [
    {
      number: 1020,
      text: '今年累计任务建次数',
    },
    {
      number: 18,
      text: '本月累计任务次数',
    },
    {
      number: 4,
      text: '今日累计任务次数',
    },
    {
      number: 71,
      text: '今年失败任务次数',
    },
    {
      number: 949,
      text: '今年失败成功次数',
    },
    {
      number: 811,
      text: '今年达标任务个数',
    },
  ];
  ranking: any = {
    data: [
      {
        name: '周口',
        value: 55,
      },
      {
        name: '南阳',
        value: 120,
      },
      {
        name: '西峡',
        value: 78,
      },
      {
        name: '驻马店',
        value: 66,
      },
      {
        name: '新乡',
        value: 80,
      },
      {
        name: '新乡2',
        value: 80,
      },
      {
        name: '新乡3',
        value: 80,
      },
      {
        name: '新乡4',
        value: 80,
      },
      {
        name: '新乡5',
        value: 80,
      },
      {
        name: '新乡6',
        value: 80,
      },
    ],
    carousel: 'single',
    unit: '人',
  };
  water: any = {
    data: [24, 45],
    shape: 'roundRect',
    formatter: '{value}%',
    waveNum: 3,
  };
  rate = [
    {
      id: 'centerRate1',
      tips: 60,
      colorData: {
        textStyle: '#3fc0fb',
        series: {
          color: ['#00bcd44a', 'transparent'],
          dataColor: {
            normal: '#03a9f4',
            shadowColor: '#97e2f5',
          },
        },
      },
    },
    {
      id: 'centerRate2',
      tips: 40,
      colorData: {
        textStyle: '#67e0e3',
        series: {
          color: ['#faf3a378', 'transparent'],
          dataColor: {
            normal: '#ff9800',
            shadowColor: '#fcebad',
          },
        },
      },
    },
  ];
  options: EChartsOption[] = [];
  constructor() {}

  ngOnInit() {
    this.options = this.rate.map((item) => this.getOptions(item));
  }
  getOptions(val: any): EChartsOption {
    return {
      title: {
        text: val.tips * 1 + '%',
        left: 'center',
        top: 'center',
        textStyle: {
          color: val.colorData.textStyle,
          fontSize: 16,
        },
      },
      series: [
        {
          type: 'pie',
          radius: ['75%', '80%'],
          center: ['50%', '50%'],
          color: val.colorData.series.color,
          label: {
            show: false,
          },
          data: [
            {
              value: val.tips,
              itemStyle: {
                color: val.colorData.series.dataColor.normal,
                shadowBlur: 10,
                shadowColor: val.colorData.series.dataColor.shadowColor,
              },
            },
            {
              value: 100 - val.tips,
            },
          ],
        },
      ],
    };
  }
}
