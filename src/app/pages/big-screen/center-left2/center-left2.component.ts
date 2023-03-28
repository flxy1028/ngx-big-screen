import { EChartsOption } from 'echarts';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { theme } from '@common/echart/style/theme';
const geoCoordMap: Record<string, number[]> = {
  厦门市: [118.11022, 24.490474, 20],
  福州市: [119.206239, 26.275302, 20],
  泉州市: [118.589421, 24.908853, 20],
  漳州市: [117.561801, 24.510897, 20],
  龙岩市: [116.82978, 25.391603, 20],
  莆田市: [119.007558, 25.591011, 20],
  三明市: [117.435001, 26.465444, 20],
  南平市: [118.178459, 27.535627, 20],
  宁德市: [119.527082, 27.15924, 20],
};
const seriesData: Array<{ name: string; value?: number[] }> = [
  {
    name: '厦门市',
  },
  {
    name: '福州市',
  },
  {
    name: '泉州市',
  },
  {
    name: '漳州市',
  },
  {
    name: '龙岩市',
  },
  {
    name: '莆田市',
  },
  {
    name: '三明市',
  },
  {
    name: '南平市',
  },
  {
    name: '宁德市',
  },
];
const defaultSeriesData = [
  {
    // 名字需要与 “common/map/fujian.js” 地图数据文件里面定义的一一对应，不能是 “福州” 或者 “闽” 之类的缩写
    name: '福州市',
    value: 10,
    elseData: {
      // 这里放置地图 tooltip 里想显示的数据
    },
  },
  {
    name: '厦门市',
    value: 9,
  },
  {
    name: '漳州市',
    value: 8,
  },
  {
    name: '泉州市',
    value: 7,
  },
  {
    name: '三明市',
    value: 6,
  },
  {
    name: '莆田市',
    value: 5,
  },
  {
    name: '南平市',
    value: 4,
  },
  {
    name: '龙岩市',
    value: 3,
  },
  {
    name: '宁德市',
    value: 2,
  },
];
@Component({
  selector: 'app-center-left2',
  templateUrl: './center-left2.component.html',
  styleUrls: ['./center-left2.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenterLeft2Component implements OnInit {
  options: EChartsOption = {};
  theme = theme;
  constructor() {}

  ngOnInit() {
    this.updateOptions(defaultSeriesData);
  }
  updateOptions(val: any[]) {
    this.options = {
      showLegendSymbol: true,
      tooltip: {
        trigger: 'item',
        textStyle: {
          fontSize: 14,
          lineHeight: 22,
        },
        position: (point) => {
          // 固定在顶部
          return [point[0] + 50, point[1] - 20];
        },
        // 如果需要自定义 tooltip样式，需要使用formatter
        /*
          formatter: params => {
            return `<div style=""> ... </div>`
          }
        */
      },
      // 如果需要根据不同的数据展示深浅不一的颜色，则把这里打开
      // visualMap: {
      //   min: 0,
      //   max: 10,
      //   show: false,
      //   seriesIndex: 0,
      //   // 颜色
      //   inRange: {
      //     color: ['rgba(41,166,206, .5)', 'rgba(69,117,245, .9)'],
      //   },
      // },
      // 底部背景
      geo: [
        {
          show: true,
          aspectScale: 0.85, //长宽比
          zoom: 1.16,
          top: '10%',
          left: '17%',
          map: '福建',
          roam: false,
          itemStyle: {
            borderColor: '#7ad5ff7f',
            shadowOffsetY: 5,
            shadowBlur: 15,
            areaColor: 'rgba(5,21,35,0.1)',
          },
        },
      ],
      series: [
        {
          type: 'map',
          name: '相关指数',
          aspectScale: 0.85, //长宽比
          zoom: 1.16, //缩放
          geoIndex: 0,
          map: '福建',
          top: '9%',
          left: '16%',
          itemStyle: {
            // 背景渐变色
            areaColor: {
              type: 'linear',
              x: 0,
              y: 300,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: 'RGBA(19,96,187,1)', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'RGBA(7,193,223,1)', // 50% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
            borderColor: '#4ECEE6',
            borderWidth: 1,
          },
          label: {
            formatter: (params) => `${params.name}`,
            show: true,
            position: 'insideRight',
            fontSize: 14,
            color: '#efefef',
          },
          emphasis: {
            label: {
              color: '#fff',
            },
            itemStyle: {
              areaColor: '#4f7fff',
              borderColor: 'rgba(0,242,252,.6)',
              borderWidth: 2,
              shadowBlur: 10,
              shadowColor: '#00f2fc',
            },
          },
          data: val,
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          symbolSize: 7,
          effectType: 'ripple',
          legendHoverLink: false,
          showEffectOn: 'render',
          rippleEffect: {
            period: 4,
            scale: 2.5,
            brushType: 'stroke',
          },
          zlevel: 1,
          itemStyle: {
            color: '#99FBFE',
            shadowBlur: 5,
            shadowColor: '#fff',
          },
          data: this.convertData(seriesData),
        },
      ],
    };
  }
  private convertData = function (data: any) {
    const scatterData = [];
    for (let i = 0; i < data.length; i++) {
      const geoCoord: number[] = geoCoordMap[data[i].name] as number[];
      if (geoCoord) {
        scatterData.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return scatterData;
  };
}
