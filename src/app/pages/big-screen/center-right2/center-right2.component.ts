import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DigitalFlopConfig } from 'ngx-datav/digital-flop/digital-flop-config';

@Component({
  selector: 'app-center-right2',
  templateUrl: './center-right2.component.html',
  styleUrls: ['./center-right2.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenterRight2Component implements OnInit {
  config: Partial<any> = {
    header: ['组件', '分支', '覆盖率'],
    data: [
      ['组件1', 'dev-1', "<span  class='colorGrass'>↑75%</span>"],
      ['组件2', 'dev-2', "<span  class='colorRed'>↓33%</span>"],
      ['组件3', 'dev-3', "<span  class='colorGrass'>↑100%</span>"],
      ['组件4', 'rea-1', "<span  class='colorGrass'>↑94%</span>"],
      ['组件5', 'rea-2', "<span  class='colorGrass'>↑95%</span>"],
      ['组件6', 'fix-2', "<span  class='colorGrass'>↑63%</span>"],
      ['组件7', 'fix-4', "<span  class='colorGrass'>↑84%</span>"],
      ['组件8', 'fix-7', "<span  class='colorRed'>↓46%</span>"],
      ['组件9', 'dev-2', "<span  class='colorRed'>↓13%</span>"],
      ['组件10', 'dev-9', "<span  class='colorGrass'>↑76%</span>"],
    ],
    rowNum: 7, //表格行数
    headerHeight: 35,
    headerBGC: '#0f1325', //表头
    oddRowBGC: '#0f1325', //奇数行
    evenRowBGC: '#171c33', //偶数行
    index: true,
    columnWidth: [50],
    align: ['center'],
  };
  constructor() {}

  ngOnInit() {}
}
