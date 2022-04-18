import {Directive, ElementRef, Inject, Input, Renderer2} from '@angular/core';
import {
    TuiDestroyService,
    TuiDirectiveStylesService,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {Observable, race, timer} from 'rxjs';
import {
    mapTo,
    mergeMap,
    switchMap,
    switchMapTo,
    take,
    takeUntil,
    tap,
} from 'rxjs/operators';

import {
    RIPPLE_OFF,
    RIPPLE_ON,
    TUI_RIPPLE_END,
    TUI_RIPPLE_PROVIDERS,
    TUI_RIPPLE_START,
} from './ripple.providers';

const TOUCH_MOVE_DELAY = 100;
const STYLE = `
@keyframes ${RIPPLE_ON} {
    from {
        transform: scale(0);
        opacity: 0.12;
    }

    to {
        transform: none;
        opacity: 0.12;
    }
}

@keyframes ${RIPPLE_OFF} {
    from {
        transform: none;
        opacity: 0.12;
    }

    to {
        transform: none;
        opacity: 0;
    }
}

*[tuiRipple] {
    position: relative;
    overflow: hidden;
}

.tui-ripple {
    position: absolute;
    border-radius: 100%;
    background: currentColor;
    z-index: 100;
    transform: scale(0);
    animation-duration: 450ms;
    animation-fill-mode: forwards;
    pointer-events: none;
}
`;

@Directive({
    selector: '[tuiRipple]',
    providers: TUI_RIPPLE_PROVIDERS,
})
export class TuiRippleDirective {
    @Input()
    tuiRipple?: string;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
        @Inject(Renderer2) renderer: Renderer2,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(TUI_RIPPLE_START) start$: Observable<HTMLElement>,
        @Inject(TUI_RIPPLE_END) end$: Observable<EventTarget>,
    ) {
        directiveStyles.addStyle(STYLE, 'TuiRippleDirective');

        const touchEnd$ = typedFromEvent(nativeElement, 'touchend');
        const touchMove$ = typedFromEvent(nativeElement, 'touchmove');

        end$.subscribe(element => {
            renderer.removeChild(nativeElement, element);
        });
        start$
            .pipe(
                mergeMap(ripple => {
                    const animationEndOn$ = typedFromEvent(ripple, 'animationend');

                    return race(
                        timer(TOUCH_MOVE_DELAY).pipe(mapTo(false)),
                        touchEnd$.pipe(mapTo(true)),
                    ).pipe(
                        take(1),
                        // eslint-disable-next-line rxjs/no-unsafe-takeuntil
                        takeUntil(touchMove$),
                        tap(() => {
                            renderer.setStyle(
                                ripple,
                                'background',
                                this.tuiRipple || null,
                            );
                            renderer.appendChild(nativeElement, ripple);
                        }),
                        switchMap(isTap =>
                            isTap
                                ? animationEndOn$
                                : race<unknown>(
                                      touchEnd$.pipe(switchMapTo(animationEndOn$)),
                                      animationEndOn$.pipe(switchMapTo(touchEnd$)),
                                  ),
                        ),
                        mapTo(ripple),
                    );
                }),
                takeUntil(destroy$),
            )
            .subscribe(element => {
                renderer.setStyle(element, 'animationName', RIPPLE_OFF);
            });
    }
}
