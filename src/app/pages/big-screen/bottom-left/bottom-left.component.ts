import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { EChartsOption } from 'echarts/types/dist/echarts';
import * as echarts from 'echarts';
import { theme } from '@common/echart/style/theme';
@Component({
  selector: 'app-bottom-left',
  templateUrl: './bottom-left.component.html',
  styleUrls: ['./bottom-left.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomLeftComponent implements OnInit {
  theme = theme;
  options: EChartsOption = {};
  private cdata = {
    category: [
      '市区',
      '万州',
      '江北',
      '南岸',
      '北碚',
      '綦南',
      '长寿',
      '永川',
      '璧山',
      '江津',
      '城口',
      '大足',
      '垫江',
      '丰都',
      '奉节',
      '合川',
      '江津区',
      '开州',
      '南川',
      '彭水',
      '黔江',
      '石柱',
      '铜梁',
      '潼南',
      '巫山',
      '巫溪',
      '武隆',
      '秀山',
      '酉阳',
      '云阳',
      '忠县',
      '川东',
      '检修',
    ],
    lineData: [
      18092, 20728, 24045, 28348, 32808, 36097, 39867, 44715, 48444, 50415,
      56061, 62677, 59521, 67560, 18092, 20728, 24045, 28348, 32808, 36097,
      39867, 44715, 48444, 50415, 36097, 39867, 44715, 48444, 50415, 50061,
      32677, 49521, 32808,
    ],
    barData: [
      4600, 5000, 5500, 6500, 7500, 8500, 9900, 12500, 14000, 21500, 23200,
      24450, 25250, 33300, 4600, 5000, 5500, 6500, 7500, 8500, 9900, 22500,
      14000, 21500, 8500, 9900, 12500, 14000, 21500, 23200, 24450, 25250, 7500,
    ],
    rateData: [] as any[],
  };
  constructor() {}
  ngOnInit() {
    this.setData();
    this.updateEchart();
  }
  private updateEchart() {
    const { cdata } = this;
    this.options = {
      tooltip: {
        show: true,
        trigger: 'item',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC',
          },
        },
      },
      legend: {
        show: true,
      },
      grid: {
        left: '8%',
        width: '88%',
        top: '5%',
        bottom: '7%',
      },
      xAxis: {
        data: cdata.category,
        axisLine: {
          lineStyle: {
            color: '#B4B4B4',
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: [
        {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#B4B4B4',
            },
          },

          axisLabel: {
            formatter: '{value} ',
          },
        },
        {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#B4B4B4',
            },
          },
          axisLabel: {
            formatter: '{value} ',
          },
        },
      ],
      series: [
        {
          name: '贯通率',
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 8,
          yAxisIndex: 1,
          itemStyle: {
            color: '#F02FC2',
          },
          data: cdata.rateData,
        },
        {
          name: '已贯通',
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            borderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#956FD4' },
              { offset: 1, color: '#3EACE5' },
            ]),
          },
          data: cdata.barData,
        },
        {
          name: '计划贯通',
          type: 'bar',
          barGap: '-100%',
          barWidth: 10,
          itemStyle: {
            borderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(156,107,211,0.8)' },
              { offset: 0.2, color: 'rgba(156,107,211,0.5)' },
              { offset: 1, color: 'rgba(156,107,211,0.2)' },
            ]),
          },
          z: -12,
          data: cdata.lineData,
        },
      ],
    };
  }
  private setData() {
    const { cdata } = this;
    for (let i = 0; i < cdata.barData.length - 1; i++) {
      const rate = cdata.barData[i] / cdata.lineData[i];
      cdata.rateData.push(rate.toFixed(2));
    }
  }
}
