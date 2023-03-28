import { title, subtitle, moduleInfo, WEEK } from '@constant/index';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { DrawService } from '@common/service/draw.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-big-screen',
  templateUrl: './big-screen.component.html',
  styleUrls: ['./big-screen.component.less'],
  encapsulation: ViewEncapsulation.None,
  providers: [DrawService],
  host: {
    id: 'index',
  },
})
export class BigScreenComponent implements AfterViewInit, OnInit, OnDestroy {
  loading = true;
  dateDay = '';
  dateYear = '';
  dateWeek = '';
  title = title;
  subtitle = subtitle;
  moduleInfo = moduleInfo;
  private timer = 0;
  constructor(private draw: DrawService) {}
  ngAfterViewInit(): void {
    this.handleTime();
    this.cancelLoading();
    this.draw.calcRate();
    this.draw.windowDraw();
  }
  ngOnInit() {}
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
  private cancelLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 100);
  }
  private handleTime() {
    this.timer = setInterval(() => {
      const date = new Date();
      this.dateDay = format(date, 'HH: mm: ss');
      this.dateYear = format(date, 'yyyy-MM-dd');
      this.dateWeek = WEEK[date.getDay()];
    });
  }
}
