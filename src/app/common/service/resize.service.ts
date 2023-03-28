import {
  Injectable,
  ViewContainerRef,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { observerDomResize } from '@common/utils';
import {
  animationFrameScheduler,
  fromEvent,
  observeOn,
  Subject,
  throttleTime,
} from 'rxjs';

@Injectable()
export class ResizeService extends Subject<void> implements OnDestroy {
  domSize = {
    width: 0,
    height: 0,
  };
  domRef: HTMLElement;
  constructor(
    private viewRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef
  ) {
    super();
    this.domRef = this.viewRef.element.nativeElement;
  }
  listeners(domRef?: HTMLElement): void {
    this.domRef = domRef || this.domRef;
    this.updateDomSize();
    // const observer = observerDomResize(this.domRef, this.updateDomSize);
    const resize$ = fromEvent(window, 'resize')
      // .pipe(throttleTime(50, undefined, { trailing: true }))
      .pipe(observeOn(animationFrameScheduler))
      .subscribe(this.updateDomSize);
    this.domSizeEffectDisposer.push(() => {
      resize$.unsubscribe();
    });
    // .pipe(observeOn(animationFrameScheduler))
  }
  ngOnDestroy() {
    this.domSizeEffectDisposer.forEach((disposer) => disposer());
  }

  private updateDomSize = () => {
    const { domSize, domRef } = this;
    const { clientWidth = 0, clientHeight = 0 } = this.domRef || {};
    if (!domRef) {
      console.warn(
        'Failed to get dom node, component rendering may be abnormal!'
      );
    } else if (!clientWidth || !clientHeight) {
      console.warn(
        'Component width or height is 0px, rendering abnormality may occur!'
      );
    }
    domSize.width = clientWidth;
    domSize.height = clientHeight;
    this.cdRef.detectChanges();
  };
  private domSizeEffectDisposer: (() => void)[] = [];
}
