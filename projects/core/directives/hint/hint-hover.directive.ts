/* eslint-disable rxjs/no-unsafe-takeuntil */
import {Directive, ElementRef, inject, Input} from '@angular/core';
import {TuiHoveredService} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
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
    selector: '[tuiHint]:not(ng-container):not(ng-template)',
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
            switchMap(visible => of(visible).pipe(delay(visible ? 0 : this.hideDelay))),
            takeUntil(this.hovered$),
            repeat(),
        ),
        this.hovered$.pipe(
            switchMap(visible =>
                of(visible).pipe(delay(visible ? this.showDelay : this.hideDelay)),
            ),
            takeUntil(this.toggle$),
            repeat(),
        ),
    ).pipe(
        filter(() => this.enabled),
        map(value => value && !tuiIsObscured(this.el)),
        tap(visible => {
            this.visible = visible;
        }),
    );

    @Input('tuiHintShowDelay')
    public showDelay: TuiHintOptions['showDelay'] = this.options.showDelay;

    @Input('tuiHintHideDelay')
    public hideDelay: TuiHintOptions['hideDelay'] = this.options.hideDelay;

    public readonly type = 'hint';

    public enabled = true;

    public readonly el: HTMLElement = inject(ElementRef).nativeElement;

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    public toggle(visible = !this.visible): void {
        this.toggle$.next(visible);
    }
}
