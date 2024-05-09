import {Directive, inject, Input, Renderer2} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    TUI_FALSE_HANDLER,
    TUI_TRUE_HANDLER,
    tuiInjectElement,
    tuiTypedFromEvent,
    tuiWithStyles,
} from '@taiga-ui/cdk';
import {map, mergeMap, race, switchMap, take, takeUntil, tap, timer} from 'rxjs';

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
    private readonly el = tuiInjectElement();
    private readonly renderer = inject(Renderer2);
    private readonly start$ = inject(TUI_RIPPLE_START);
    private readonly end$ = inject(TUI_RIPPLE_END);

    @Input()
    public tuiRipple?: string | '';

    protected readonly nothing = tuiWithStyles(TuiRippleStylesComponent);

    constructor() {
        const touchEnd$ = tuiTypedFromEvent(this.el, 'touchend');
        const touchMove$ = tuiTypedFromEvent(this.el, 'touchmove');

        this.end$.subscribe(element => this.renderer.removeChild(this.el, element));

        this.start$
            .pipe(
                mergeMap(ripple => {
                    const animationEndOn$ = tuiTypedFromEvent(ripple, 'animationend');

                    return race(
                        timer(TOUCH_MOVE_DELAY).pipe(map(TUI_FALSE_HANDLER)),
                        touchEnd$.pipe(map(TUI_TRUE_HANDLER)),
                    ).pipe(
                        take(1),
                        // eslint-disable-next-line rxjs/no-unsafe-takeuntil
                        takeUntil(touchMove$),
                        tap(() => {
                            this.renderer.setStyle(
                                ripple,
                                'background',
                                this.tuiRipple || null,
                            );
                            this.renderer.appendChild(this.el, ripple);
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
                takeUntilDestroyed(),
            )
            .subscribe(element =>
                this.renderer.setStyle(element, 'animationName', RIPPLE_OFF),
            );
    }
}
