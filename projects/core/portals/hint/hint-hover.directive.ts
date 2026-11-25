import {Directive, inject, input} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import {tuiIsObscured} from '@taiga-ui/core/utils/miscellaneous';
import {
    delay,
    filter,
    map,
    merge,
    of,
    repeat,
    Subject,
    switchMap,
    takeUntil,
    tap,
} from 'rxjs';

import {TuiHintMobile} from './hint-mobile.directive';
import {TUI_HINT_OPTIONS} from './hint-options.directive';

const MOBILE_HIDE_DELAY_MS = 100;

@Directive({
    providers: [tuiAsDriver(TuiHintHover), TuiHoveredService],
    exportAs: 'tuiHintHover',
    hostDirectives: [TuiHintMobile],
})
export class TuiHintHover extends TuiDriver {
    private readonly parent = inject(TuiHintHover, {optional: true, skipSelf: true});
    private readonly isMobile = inject(WA_IS_MOBILE);
    private readonly hovered$ = inject(TuiHoveredService);
    private readonly options = inject(TUI_HINT_OPTIONS);
    private visible = false;
    private readonly toggle$ = new Subject<boolean>();
    private readonly stream$ = merge(
        this.toggle$.pipe(
            switchMap((show) =>
                this.isMobile
                    ? of(show).pipe(delay(show ? 0 : MOBILE_HIDE_DELAY_MS))
                    : of(show).pipe(delay(show ? 0 : this.hideDelay())),
            ),
            takeUntil(this.hovered$),
            repeat(),
        ),
        this.hovered$.pipe(
            filter(() => !this.isMobile || !this.el.matches('a,button')),
            switchMap((show) =>
                this.isMobile
                    ? of(show).pipe(
                          filter(() => !show),
                          delay(0),
                      )
                    : of(show).pipe(delay(show ? this.showDelay() : this.hideDelay())),
            ),
            takeUntil(this.toggle$),
            repeat(),
        ),
    ).pipe(
        filter(() => this.enabled),
        map(
            (value) =>
                value &&
                (this.el.hasAttribute('tuiHintPointer') ||
                    !tuiIsObscured(this.el, 'tui-popups > :not(tui-modal)')),
        ),
        tap((visible) => {
            this.visible = visible;
        }),
    );

    protected readonly el = tuiInjectElement();

    public readonly showDelay = input(this.options.showDelay, {
        alias: 'tuiHintShowDelay',
    });

    public readonly hideDelay = input(this.options.hideDelay, {
        alias: 'tuiHintHideDelay',
    });

    public readonly type = 'hint';
    public enabled = true;

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }

    public toggle(visible = !this.visible): void {
        this.toggle$.next(visible);
        this.parent?.toggle(visible);
    }

    /** @deprecated TODO remove in v6 */
    public close(): void {
        this.toggle$.next(false);
    }
}
