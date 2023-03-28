import { EChartsOption, LinearGradientObject } from 'echarts';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { theme } from '@common/echart/style/theme';
const colorList = {
  linearYtoG: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: '#f5b44d',
      },
      {
        offset: 1,
        color: '#28f8de',
      },
    ],
  },
  linearGtoB: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#43dfa2',
      },
      {
        offset: 1,
        color: '#28f8de',
      },
    ],
  },
  linearBtoG: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#1c98e8',
      },
      {
        offset: 1,
        color: '#28f8de',
      },
    ],
  },
  areaBtoG: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: 'rgba(35,184,210,.2)',
      },
      {
        offset: 1,
        color: 'rgba(35,184,210,0)',
      },
    ],
  },
};
@Component({
  selector: 'app-bottom-right',
  templateUrl: './bottom-right.component.html',
  styleUrls: ['./bottom-right.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomRightComponent implements OnInit, OnDestroy {
  cdata = {
    year: 1980,
    weekCategory: [] as any,
    radarData: [] as any,
    radarDataAvg: [] as any,
    maxData: 12000,
    weekMaxData: [] as any,
    weekLineData: [] as any,
  };
  options: EChartsOption = {};
  theme = theme;
  drawTiming: any;
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.setData();
    this.updataEchart();
    this.drawTimingFn();
  }
  ngOnDestroy(): void {
    clearInterval(this.drawTiming);
  }
  private drawTimingFn() {
    this.drawTiming = setInterval(() => {
      this.setData();
      this.updataEchart();
      this.cdRef.markForCheck();
    }, 6000);
  }
  private setData() {
    // methods
    const { cdata } = this;
    // 清空轮询数据
    cdata.weekCategory = [];
    cdata.weekMaxData = [];
    cdata.weekLineData = [];
    cdata.radarData = [];
    cdata.radarDataAvg = [];

    const dateBase = new Date();
    cdata.year = dateBase.getFullYear();
    // 周数据
    for (let i = 0; i < 7; i++) {
      // 日期
      const date = new Date();
      cdata.weekCategory.unshift(
        [date.getMonth() + 1, date.getDate() - i].join('/')
      );

      // 折线图数据
      cdata.weekMaxData.push(cdata.maxData);
      const distance = Math.round(Math.random() * 11000 + 500);
      cdata.weekLineData.push(distance);

      // 雷达图数据
      // 我的指标
      const averageSpeed = +(Math.random() * 5 + 3).toFixed(3);
      const maxSpeed = averageSpeed + +(Math.random() * 3).toFixed(2);
      const hour = +(distance / 1000 / averageSpeed).toFixed(1);
      const radarDayData = [distance, averageSpeed, maxSpeed, hour];
      cdata.radarData.unshift(radarDayData);

      // 平均指标
      const distanceAvg = Math.round(Math.random() * 8000 + 4000);
      const averageSpeedAvg = +(Math.random() * 4 + 4).toFixed(3);
      const maxSpeedAvg = averageSpeedAvg + +(Math.random() * 2).toFixed(2);
      const hourAvg = +(distance / 1000 / averageSpeed).toFixed(1);
      const radarDayDataAvg = [
        distanceAvg,
        averageSpeedAvg,
        maxSpeedAvg,
        hourAvg,
      ];
      cdata.radarDataAvg.unshift(radarDayDataAvg);
    }
  }
  private updataEchart() {
    const { cdata } = this;
    this.options = {
      title: {
        text: '',
        textStyle: {
          color: '#D3D6DD',
          fontSize: 24,
          fontWeight: 'normal',
        },
        subtext: cdata.year + '/' + cdata.weekCategory[6],
        subtextStyle: {
          color: '#fff',
          fontSize: 16,
        },
        top: 50,
        left: 80,
      },
      legend: {
        top: 100,
        left: 80,
        orient: 'vertical',
        itemGap: 15,
        itemWidth: 12,
        itemHeight: 12,
        data: ['平均指标', '我的指标'],
        textStyle: {
          color: '#fff',
          fontSize: 14,
        },
      },
      tooltip: {
        trigger: 'item',
      },
      radar: {
        center: ['68%', '27%'],
        radius: '40%',
        splitNumber: 8,
        splitLine: {
          lineStyle: {
            color: colorList.linearYtoG as LinearGradientObject,
            opacity: 0.6,
          },
        },
        splitArea: {
          areaStyle: {
            opacity: 0.1,
            shadowBlur: 25,
            shadowColor: '#000',
            shadowOffsetX: 0,
            shadowOffsetY: 5,
          },
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
          },
        },
        indicator: [
          {
            name: '服务态度',
            max: cdata.maxData,
          },
          {
            name: '产品质量',
            max: 10,
          },
          {
            name: '任务效率',
            max: 12,
          },
          {
            name: '售后保障',
            max: 3.5,
          },
        ],
      },
      grid: {
        left: 90,
        right: 80,
        bottom: '15%',
        top: '50%',
      },
      xAxis: {
        type: 'category',
        position: 'bottom',
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: 'rgba(255,255,255,.8)',
          fontSize: 12,
        },
        data: cdata.weekCategory,
      },
      // 下方Y轴
      yAxis: {
        name: '工单',
        nameLocation: 'end',
        nameGap: 24,
        nameTextStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: 14,
        },
        alignTicks: false,
        max: cdata.maxData,
        splitNumber: 4,

        axisLine: {
          lineStyle: {
            opacity: 0,
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#fff',
            opacity: 0.1,
          },
        },
        axisLabel: {
          color: 'rgba(255,255,255,.8)',
          fontSize: 12,
        },
      },
      series: [
        {
          name: '',
          type: 'radar',
          symbolSize: 0,
          data: [
            {
              name: '平均指标',
              value: cdata.radarDataAvg[6],
              itemStyle: {
                color: '#f8d351',
              },
              lineStyle: {
                opacity: 0,
              },
              areaStyle: {
                color: '#f8d351',
                shadowBlur: 25,
                shadowColor: 'rgba(248,211,81,.3)',
                shadowOffsetX: 0,
                shadowOffsetY: -10,
                opacity: 1,
              },
            },
            {
              name: '我的指标',
              value: cdata.radarData[6],
              itemStyle: {
                color: '#43dfa2',
              },
              lineStyle: {
                opacity: 0,
              },
              areaStyle: {
                color: colorList.linearGtoB as LinearGradientObject,
                shadowBlur: 15,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 5,
                opacity: 0.8,
              },
            },
          ],
        },
        {
          name: '',
          type: 'line',
          smooth: true,
          symbol: 'emptyCircle',
          symbolSize: 8,
          itemStyle: {
            color: '#fff',
          },
          lineStyle: {
            color: colorList.linearBtoG as LinearGradientObject,
            width: 3,
          },
          areaStyle: {
            color: colorList.areaBtoG as LinearGradientObject,
          },
          data: cdata.weekLineData,
          // lineSmooth: true,
          markLine: {
            silent: true,
            animation: false,
            data: [
              {
                type: 'average',
                name: '平均值',
              },
            ],
            precision: 0,
            label: {
              formatter: '平均值: \n {c}',
              color: 'inherit',
            },
            lineStyle: {
              color: 'rgba(248,211,81,.7)',
            },
          },
          tooltip: {
            position: 'top',
            formatter: '{c} m',
            backgroundColor: 'rgba(28,152,232,.2)',
            padding: 6,
          },
        },
        {
          name: '占位背景',
          type: 'bar',
          itemStyle: {
            color: '#000',
            opacity: 0,
          },
          silent: true,
          barWidth: '50%',
          data: cdata.weekMaxData,
          animation: false,
        },
      ],
    };
  }
}
