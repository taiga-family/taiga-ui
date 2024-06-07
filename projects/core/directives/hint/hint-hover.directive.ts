import {Directive, inject, Input} from '@angular/core';
import {TuiHoveredService, tuiInjectElement} from '@taiga-ui/cdk';
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

import type {TuiHintOptions} from './hint-options.directive';
import {TUI_HINT_OPTIONS} from './hint-options.directive';

@Directive({
    standalone: true,
    selector: '[tuiHint]:is(never)',
    providers: [tuiAsDriver(TuiHintHoverDirective), TuiHoveredService],
    exportAs: 'tuiHintHover',
})
export class TuiHintHoverDirective extends TuiDriver {
    private readonly hovered$ = inject(TuiHoveredService);
    private readonly options = inject(TUI_HINT_OPTIONS);
    private visible = false;
    private readonly toggle$ = new Subject<boolean>();
    private readonly stream$ = merge(
        this.toggle$.pipe(
            switchMap(visible =>
                of(visible).pipe(delay(visible ? 0 : this.tuiHintHideDelay)),
            ),
            takeUntil(this.hovered$),
            repeat(),
        ),
        this.hovered$.pipe(
            switchMap(visible =>
                of(visible).pipe(
                    delay(visible ? this.tuiHintShowDelay : this.tuiHintHideDelay),
                ),
            ),
            takeUntil(this.toggle$),
            repeat(),
        ),
    ).pipe(
        filter(() => this.enabled),
        map(
            value =>
                value &&
                (this.el.hasAttribute('tuiHintPointer') || !tuiIsObscured(this.el)),
        ),
        tap(visible => {
            this.visible = visible;
        }),
    );

    private readonly parent = inject(TuiHintHoverDirective, {
        optional: true,
        skipSelf: true,
    });

    @Input()
    public tuiHintShowDelay: TuiHintOptions['showDelay'] = this.options.showDelay;

    @Input()
    public tuiHintHideDelay: TuiHintOptions['hideDelay'] = this.options.hideDelay;

    public readonly type = 'hint';

    public enabled = true;

    public readonly el = tuiInjectElement();

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    public toggle(visible = !this.visible): void {
        this.toggle$.next(visible);
        this.parent?.toggle(visible);
    }
}
