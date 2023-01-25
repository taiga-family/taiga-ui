import {Directive, HostListener, Inject, Input} from '@angular/core';
import {tuiDefaultProp, TuiHoveredService} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {merge, Observable, of, Subject} from 'rxjs';
import {delay, switchMap} from 'rxjs/operators';

import {TUI_HINT_OPTIONS, TuiHintOptions} from './hint-options.directive';

@Directive({
    selector: '[tuiHint]:not(ng-container)',
    exportAs: 'tuiHintHover',
    providers: [tuiAsDriver(TuiHintHoverDirective), TuiHoveredService],
})
export class TuiHintHoverDirective extends TuiDriver {
    private readonly toggle$ = new Subject<boolean>();
    private readonly click$ = new Subject<boolean>();
    private readonly stream$ = merge(
        merge(this.toggle$, this.hovered$).pipe(
            switchMap(visible =>
                of(visible).pipe(delay(visible ? this.showDelay : this.hideDelay)),
            ),
        ),
        this.click$.pipe(switchMap(visible => of(visible).pipe(delay(this.clickDelay)))),
    );

    @Input('tuiHintShowDelay')
    @tuiDefaultProp()
    showDelay: TuiHintOptions['showDelay'] = this.options.showDelay;

    @Input('tuiHintHideDelay')
    @tuiDefaultProp()
    hideDelay: TuiHintOptions['hideDelay'] = this.options.hideDelay;

    @Input('tuiHintClickDelay')
    @tuiDefaultProp()
    clickDelay: TuiHintOptions['clickDelay'] = this.options.clickDelay;

    constructor(
        @Inject(TuiHoveredService) private readonly hovered$: Observable<boolean>,
        @Inject(TUI_HINT_OPTIONS) private readonly options: TuiHintOptions,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    @HostListener('click')
    onClick(): void {
        this.click$.next(true);
    }

    toggle(visible: boolean): void {
        this.toggle$.next(visible);
    }
}
