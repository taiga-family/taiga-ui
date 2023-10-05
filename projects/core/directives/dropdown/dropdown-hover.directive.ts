import {Directive, Inject, Input, Optional, SkipSelf} from '@angular/core';
import {TuiHoveredService} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {merge, Observable, of, Subject} from 'rxjs';
import {delay, share, switchMap, tap} from 'rxjs/operators';

import {
    TUI_DROPDOWN_HOVER_OPTIONS,
    TuiDropdownHoverOptions,
} from './dropdown-hover.options';

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
    showDelay = this.options.showDelay;

    @Input('tuiDropdownHideDelay')
    hideDelay = this.options.hideDelay;

    hovered = false;

    readonly type = 'dropdown';

    constructor(
        @Inject(TuiHoveredService) private readonly hovered$: Observable<boolean>,
        @Inject(TUI_DROPDOWN_HOVER_OPTIONS)
        private readonly options: TuiDropdownHoverOptions,
        @SkipSelf()
        @Optional()
        @Inject(TuiDropdownHoverDirective)
        private readonly parentHover: TuiDropdownHoverDirective | null,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    toggle(visible: boolean): void {
        if (this.parentHover) {
            this.parentHover.toggle(visible);
        }

        this.toggle$.next(visible);
    }
}
