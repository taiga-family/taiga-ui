import {Directive, ElementRef, Inject, Input, Renderer2, Self} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    TuiDestroyService,
    TuiDirectiveStylesService,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {race, timer} from 'rxjs';
import {map, mergeMap, switchMap, take, takeUntil, tap} from 'rxjs/operators';

import {
    RIPPLE_OFF,
    TUI_RIPPLE_END,
    TUI_RIPPLE_PROVIDERS,
    TUI_RIPPLE_START,
} from './ripple.providers';
import {TuiRippleStylesComponent} from './ripple-styles.component';

const TOUCH_MOVE_DELAY = 100;

@Directive({
    selector: '[tuiRipple]',
    providers: TUI_RIPPLE_PROVIDERS,
})
export class TuiRippleDirective {
    @Input()
    tuiRipple?: string | '';

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
        @Inject(Renderer2) renderer: Renderer2,
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(TUI_RIPPLE_START) start$: Observable<HTMLElement>,
        @Inject(TUI_RIPPLE_END) end$: Observable<EventTarget>,
    ) {
        directiveStyles.addComponent(TuiRippleStylesComponent);

        const touchEnd$ = tuiTypedFromEvent(nativeElement, 'touchend');
        const touchMove$ = tuiTypedFromEvent(nativeElement, 'touchmove');

        end$.subscribe(element => {
            renderer.removeChild(nativeElement, element);
        });
        start$
            .pipe(
                mergeMap(ripple => {
                    const animationEndOn$ = tuiTypedFromEvent(ripple, 'animationend');

                    return race(
                        timer(TOUCH_MOVE_DELAY).pipe(map(ALWAYS_FALSE_HANDLER)),
                        touchEnd$.pipe(map(ALWAYS_TRUE_HANDLER)),
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
                                : race(
                                      touchEnd$.pipe(switchMap(() => animationEndOn$)),
                                      animationEndOn$.pipe(switchMap(() => touchEnd$)),
                                  ),
                        ),
                        map(() => ripple),
                    );
                }),
                takeUntil(destroy$),
            )
            .subscribe(element => {
                renderer.setStyle(element, 'animationName', RIPPLE_OFF);
            });
    }
}
