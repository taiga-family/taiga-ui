import {Directive, inject, Input} from '@angular/core';
import {TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import {tuiIsObscured} from '@taiga-ui/core/utils';
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

import {TUI_HINT_OPTIONS, type TuiHintOptions} from './hint-options.directive';

@Directive({
    standalone: true,
    providers: [tuiAsDriver(TuiHintHover), TuiHoveredService],
    exportAs: 'tuiHintHover',
})
export class TuiHintHover extends TuiDriver {
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly el = tuiInjectElement();
    private readonly hovered$ = inject(TuiHoveredService);
    private readonly options = inject(TUI_HINT_OPTIONS);
    private visible = false;
    private readonly toggle$ = new Subject<boolean>();
    private readonly stream$ = merge(
        this.toggle$.pipe(
            switchMap((visible) =>
                this.isMobile
                    ? of(visible).pipe(delay(0))
                    : of(visible).pipe(delay(visible ? 0 : this.tuiHintHideDelay)),
            ),
            takeUntil(this.hovered$),
            repeat(),
        ),
        this.hovered$.pipe(
            switchMap((visible) =>
                this.isMobile
                    ? of(visible).pipe(delay(0))
                    : of(visible).pipe(
                          delay(visible ? this.tuiHintShowDelay : this.tuiHintHideDelay),
                      ),
            ),
            takeUntil(this.toggle$),
            repeat(),
        ),
    ).pipe(
        filter(() => this.enabled),
        map(
            (value) =>
                value &&
                (this.el.hasAttribute('tuiHintPointer') || !tuiIsObscured(this.el)),
        ),
        tap((visible) => {
            this.visible = visible;
        }),
    );

    private readonly parent = inject(TuiHintHover, {
        optional: true,
        skipSelf: true,
    });

    @Input()
    public tuiHintShowDelay: TuiHintOptions['showDelay'] = this.options.showDelay;

    @Input()
    public tuiHintHideDelay: TuiHintOptions['hideDelay'] = this.options.hideDelay;

    public readonly type = 'hint';

    public enabled = true;

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }

    public toggle(visible = !this.visible): void {
        this.toggle$.next(visible);
        this.parent?.toggle(visible);
    }

    public close(): void {
        this.toggle$.next(false);
    }
}
