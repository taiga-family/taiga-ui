import {Directive, HostListener, Inject, Input, Renderer2, Self} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    TuiDestroyService,
    TuiDirectiveStylesService,
    tuiPx,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {merge, Observable, race, timer} from 'rxjs';
import {
    defaultIfEmpty,
    filter,
    map,
    switchMap,
    take,
    takeUntil,
    tap,
} from 'rxjs/operators';

import {TuiRippleStylesComponent} from './ripple-styles.component';

const TOUCH_MOVE_DELAY = 100;

const RIPPLE_ON = 'tuiRippleOn';

const RIPPLE_OFF = 'tuiRippleOff';

function tuiAnimationEnd(ripple: HTMLElement, animationName: string): Observable<void> {
    return tuiTypedFromEvent(ripple, 'animationend')
        .pipe(filter(event => animationName === event.animationName))
        .pipe(map(() => undefined));
}

@Directive({
    selector: '[tuiRipple]',
    providers: [TuiDestroyService],
})
export class TuiRippleDirective {
    @Input('tuiRipple')
    selector = 'button';

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
    ) {
        directiveStyles.addComponent(TuiRippleStylesComponent);
    }

    @HostListener('touchstart', [
        '$event.touches[0].clientX',
        '$event.touches[0].clientY',
        '$event.target',
    ])
    @HostListener('mousedown', ['$event.clientX', '$event.clientY', '$event.target'])
    start(clientX: number, clientY: number, target: HTMLElement): void {
        const nativeElement = target.closest(this.selector);

        if (!(nativeElement instanceof HTMLElement)) {
            return;
        }

        const {width, height, top, left} = nativeElement.getBoundingClientRect();

        const radius = Math.sqrt(width * width + height * height);
        const dimension = radius * 2;
        const x = clientX - left - radius;
        const y = clientY - top - radius;
        const ripple = this.renderer.createElement('div');

        this.renderer.addClass(ripple, 'tui-ripple');
        this.renderer.setStyle(ripple, 'width', tuiPx(dimension));
        this.renderer.setStyle(ripple, 'height', tuiPx(dimension));
        this.renderer.setStyle(ripple, 'left', tuiPx(x));
        this.renderer.setStyle(ripple, 'top', tuiPx(y));
        this.renderer.setStyle(ripple, 'animation-name', RIPPLE_ON);

        this.renderer.addClass(nativeElement, 'tui-ripple-container');

        const touchEnd$ = merge(
            tuiTypedFromEvent(nativeElement, 'touchend'),
            tuiTypedFromEvent(nativeElement, 'mouseup'),
            tuiTypedFromEvent(nativeElement, 'mouseout'),
        ).pipe(map(() => undefined));
        const touchMove$ = merge(
            tuiTypedFromEvent(nativeElement, 'touchmove'),
            tuiTypedFromEvent(nativeElement, 'mousemove'),
        );

        race(
            timer(TOUCH_MOVE_DELAY).pipe(map(ALWAYS_FALSE_HANDLER)),
            touchEnd$.pipe(map(ALWAYS_TRUE_HANDLER)),
        )
            .pipe(
                take(1),
                tap(() => {
                    this.renderer.appendChild(nativeElement, ripple);
                }),
                switchMap(isTap => {
                    const animationEndOn$ = tuiAnimationEnd(ripple, RIPPLE_ON);

                    return isTap
                        ? animationEndOn$
                        : race(
                              touchEnd$.pipe(switchMap(() => animationEndOn$)),
                              animationEndOn$.pipe(switchMap(() => touchEnd$)),
                          ).pipe(takeUntil(touchMove$), defaultIfEmpty<void>(undefined));
                }),
                tap(() => {
                    this.renderer.setStyle(ripple, 'animation-name', RIPPLE_OFF);
                }),
                switchMap(() => tuiAnimationEnd(ripple, RIPPLE_OFF)),
                tap(() => {
                    this.renderer.removeChild(nativeElement, ripple);
                }),
                takeUntil(this.destroy$),
            )
            .subscribe();
    }
}
