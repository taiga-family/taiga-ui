import {Directive, Inject, Input} from '@angular/core';
import {tuiDefaultProp, TuiHoveredService} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import type {Observable} from 'rxjs';
import {merge, of, Subject} from 'rxjs';
import {delay, share, switchMap, tap} from 'rxjs/operators';

import type {TuiDropdownHoverOptions} from './dropdown-hover-options.directive';
import {TUI_DROPDOWN_HOVER_OPTIONS} from './dropdown-hover-options.directive';

@Directive({
    selector: '[tuiDropdownHover]:not(ng-container)',
    providers: [tuiAsDriver(TuiDropdownHoverDirective), TuiHoveredService],
})
export class TuiDropdownHoverDirective extends TuiDriver {
    private readonly toggle$ = new Subject<boolean>();
    private readonly stream$ = merge(this.toggle$, this.hovered$).pipe(
        switchMap(visible =>
            of(visible).pipe(delay(visible ? this.showDelay : this.hideDelay)),
        ),
        tap(visible => {
            this.hovered = visible;
        }),
        share(),
    );

    @Input('tuiDropdownShowDelay')
    @tuiDefaultProp()
    showDelay = this.options.showDelay;

    @Input('tuiDropdownHideDelay')
    @tuiDefaultProp()
    hideDelay = this.options.hideDelay;

    hovered = false;

    readonly type = 'dropdown';

    constructor(
        @Inject(TuiHoveredService) private readonly hovered$: Observable<boolean>,
        @Inject(TUI_DROPDOWN_HOVER_OPTIONS)
        private readonly options: TuiDropdownHoverOptions,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    toggle(visible: boolean): void {
        this.toggle$.next(visible);
    }
}
