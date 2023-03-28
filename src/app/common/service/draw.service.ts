import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription, throttleTime } from 'rxjs';

@Injectable()
export class DrawService implements OnDestroy {
  private baseWidth = 1920;
  private baseHeight = 1080;
  private scale = {
    w: 1,
    h: 1,
  };
  private baseProportion = +parseFloat(
    (this.baseWidth / this.baseHeight).toFixed(5)
  );
  private windowDraw$: Subscription = Subscription.EMPTY;
  constructor(private eleRef: ElementRef) {}
  ngOnDestroy(): void {
    this.windowDraw$.unsubscribe();
  }
  calcRate() {
    const currentRate = window.innerWidth / window.innerHeight;
    const { eleRef, baseProportion, baseHeight, baseWidth, scale } = this;
    const ele = eleRef.nativeElement;
    if (ele) {
      if (currentRate > baseProportion) {
        // 表示更宽
        scale.w = (window.innerHeight * baseProportion) / baseWidth;
        scale.h = window.innerHeight / baseHeight;
        ele.style.transform = `scale(${scale.w}, ${scale.h}) translate(-50%, -50%)`;
      } else {
        // 表示更高
        scale.h = window.innerWidth / baseProportion / baseHeight;
        scale.w = window.innerWidth / baseWidth;
        ele.style.transform = `scale(${scale.w}, ${scale.h}) translate(-50%, -50%)`;
      }
    }
  }
  windowDraw() {
    this.windowDraw$ = fromEvent(window, 'resize')
      .pipe(throttleTime(100, undefined, { trailing: true }))
      .subscribe(() => {
        this.calcRate();
      });
  }
}
