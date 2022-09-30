import {Directive, Inject, Input} from '@angular/core';
import {tuiDefaultProp, TuiHoveredService} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {merge, Observable, of, Subject} from 'rxjs';
import {delay, switchMap} from 'rxjs/operators';

@Directive({
    selector: `[tuiDropdownHover]:not(ng-container)`,
    providers: [tuiAsDriver(TuiDropdownHoverDirective), TuiHoveredService],
})
export class TuiDropdownHoverDirective extends TuiDriver {
    private readonly toggle$ = new Subject<boolean>();
    private readonly stream$ = merge(this.toggle$, this.hovered$).pipe(
        switchMap(visible =>
            of(visible).pipe(delay(visible ? this.showDelay : this.hideDelay)),
        ),
    );

    @Input(`tuiDropdownShowDelay`)
    @tuiDefaultProp()
    showDelay = 200;

    @Input(`tuiDropdownHideDelay`)
    @tuiDefaultProp()
    hideDelay = 500;

    constructor(
        @Inject(TuiHoveredService) private readonly hovered$: Observable<boolean>,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    toggle(visible: boolean): void {
        this.toggle$.next(visible);
    }
}
