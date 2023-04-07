/* eslint-disable rxjs/no-unsafe-takeuntil */
import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {tuiDefaultProp, TuiHoveredService} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {merge, Observable, of, Subject} from 'rxjs';
import {delay, filter, repeat, switchMap, takeUntil, tap} from 'rxjs/operators';

import {TUI_HINT_OPTIONS, TuiHintOptions} from './hint-options.directive';

@Directive({
    selector: '[tuiHint]:not(ng-container)',
    exportAs: 'tuiHintHover',
    providers: [tuiAsDriver(TuiHintHoverDirective), TuiHoveredService],
})
export class TuiHintHoverDirective extends TuiDriver {
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
        tap(visible => {
            this.visible = visible;
        }),
    );

    @Input('tuiHintShowDelay')
    @tuiDefaultProp()
    showDelay: TuiHintOptions['showDelay'] = this.options.showDelay;

    @Input('tuiHintHideDelay')
    @tuiDefaultProp()
    hideDelay: TuiHintOptions['hideDelay'] = this.options.hideDelay;

    readonly type = 'hint';

    enabled = true;

    constructor(
        @Inject(TuiHoveredService) private readonly hovered$: Observable<boolean>,
        @Inject(TUI_HINT_OPTIONS) private readonly options: TuiHintOptions,
        @Inject(ElementRef) readonly el: ElementRef<HTMLElement>,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    toggle(visible = !this.visible): void {
        this.toggle$.next(visible);
    }
}
