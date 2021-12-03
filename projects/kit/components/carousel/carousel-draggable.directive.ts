import {DOCUMENT} from '@angular/common';
import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {INTERSECTION_ROOT} from '@ng-web-apis/intersection-observer';
import {
    clamp,
    TUI_IS_MOBILE,
    tuiDefaultProp,
    TuiPanService,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {EMPTY, Observable} from 'rxjs';
import {delay, endWith, filter, map, repeat, scan, takeUntil} from 'rxjs/operators';

// @dynamic
@Directive({
    selector: 'tui-carousel[draggable]',
    providers: [TuiPanService],
})
export class TuiCarouselDraggableDirective extends Observable<string | null> {
    private readonly transform$ = this.isMobile
        ? EMPTY
        : this.pan$.pipe(
              filter(() => this.draggable),
              scan((acc, [cur]) => acc + cur, 0),
              takeUntil(typedFromEvent(this.documentRef, 'mouseup').pipe(delay(0))),
              map(x => `translateX(${clamp(x, this.min, this.max)}px)`),
              endWith(null),
              repeat(),
          );

    private min = -Infinity;
    private max = Infinity;

    @Input()
    @HostBinding('class._draggable')
    @tuiDefaultProp()
    draggable = true;

    @HostBinding('class._transitioned')
    transitioned = false;

    constructor(
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(INTERSECTION_ROOT) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiPanService)
        private readonly pan$: Observable<readonly [number, number]>,
    ) {
        super(subscriber => this.transform$.subscribe(subscriber));
    }

    @HostListener('mousedown.silent')
    onMouseDown() {
        const {scrollLeft, scrollWidth, clientWidth} = this.elementRef.nativeElement;

        this.max = scrollLeft;
        this.min = clientWidth - Math.round(scrollWidth) + Math.round(scrollLeft);
        this.transitioned = true;
    }

    @HostListener('transitionend', ['$event.target'])
    onTransitionEnd(target: HTMLElement) {
        if (this.elementRef.nativeElement.firstElementChild === target) {
            this.transitioned = false;
        }
    }
}
