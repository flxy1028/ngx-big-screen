import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigScreenComponent } from './big-screen.component';
import { BigScreenRoutes } from './big-screen.routing';
import { RouterModule } from '@angular/router';
import { Decoration1Module } from 'ngx-datav/decoration1';
import { Decoration2Module } from 'ngx-datav/decoration2';
import { Decoration3Module } from 'ngx-datav/decoration3';
import { Decoration10Module } from 'ngx-datav/decoration10';
import { Decoration8Module } from 'ngx-datav/decoration8';
import { Decoration6Module } from 'ngx-datav/decoration6';
import { LoadingModule } from 'ngx-datav/loading';
// import { BorderBox3Module } from 'ngx-datav/border-box3';
import { BorderBox13Module } from 'ngx-datav/border-box13';
import { BorderBox12Module } from 'ngx-datav/border-box12';
import { DigitalFlopModule } from 'ngx-datav/digital-flop';
import { ScrollBoardModule } from 'ngx-datav/scroll-board';
import { ScrollRankingBoardModule } from 'ngx-datav/scroll-ranking-board';
import { WaterLevelPondModule } from 'ngx-datav/water-level-pond';
import { CapsuleChartModule } from 'ngx-datav/capsule-chart';
import { COMS } from '.';
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    BigScreenRoutes,
    RouterModule,
    // BorderBox3Module,
    Decoration2Module,
    Decoration3Module,
    Decoration1Module,
    LoadingModule,
    Decoration10Module,
    Decoration8Module,
    Decoration6Module,
    BorderBox13Module,
    BorderBox12Module,
    DigitalFlopModule,
    ScrollBoardModule,
    ScrollRankingBoardModule,
    WaterLevelPondModule,
    CapsuleChartModule,
  ],
  declarations: [BigScreenComponent, COMS],
})
export default class BigScreenModule {}
