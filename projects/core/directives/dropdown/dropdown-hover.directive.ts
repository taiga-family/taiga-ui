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
            of(visible).pipe(
                delay(visible ? this.tuiDropdownShowDelay : this.tuiDropdownHideDelay),
            ),
        ),
        tap(visible => {
            this.hovered = visible;
        }),
        share(),
    );

    @Input()
    tuiDropdownShowDelay = this.options.showDelay;

    /**
     * @deprecated use {@link tuiDropdownShowDelay}
     */
    set showDelay(val: number) {
        this.tuiDropdownShowDelay = val;
    }

    /**
     * @deprecated use {@link tuiDropdownShowDelay}
     */
    get showDelay(): number {
        return this.tuiDropdownShowDelay;
    }

    @Input()
    tuiDropdownHideDelay = this.options.hideDelay;

    /**
     * @deprecated use {@link tuiDropdownHideDelay}
     */
    set hideDelay(val: number) {
        this.tuiDropdownHideDelay = val;
    }

    /**
     * @deprecated use {@link tuiDropdownHideDelay}
     */
    get hideDelay(): number {
        return this.tuiDropdownHideDelay;
    }

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
        this.parentHover?.toggle(visible);
        this.toggle$.next(visible);
    }
}
