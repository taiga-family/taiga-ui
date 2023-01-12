import {
    Directive,
    EventEmitter,
    HostListener,
    Inject,
    InjectionToken,
    Input,
    Output,
} from '@angular/core';
import {tuiDefaultProp, TuiHoveredService} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {merge, Observable, of, Subject} from 'rxjs';
import {delay, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';

export interface TuiDropdownHoverOptions {
    readonly showDelay: number;
    readonly hideDelay: number;
}

/** Default values for dropdown options */
export const TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS: TuiDropdownHoverOptions = {
    showDelay: 200,
    hideDelay: 500,
};

export const TUI_DROPDOWN_HOVER_OPTIONS = new InjectionToken<TuiDropdownHoverOptions>(
    '[TUI_DROPDOWN_HOVER_OPTIONS] Default parameters for dropdown hover directive',
    {
        factory: () => TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
    },
);

@Directive({
    selector: '[tuiDropdownHover]:not(ng-container)',
    providers: [tuiAsDriver(TuiDropdownHoverDirective), TuiHoveredService],
})
export class TuiDropdownHoverDirective extends TuiDriver {
    private pressed = false;
    private readonly toggle$ = new Subject<boolean>();
    private readonly stream$ = merge(this.toggle$, this.hovered$).pipe(
        distinctUntilChanged(),
        switchMap(visible =>
            of(visible).pipe(
                delay(visible ? this.showDelay : this.hideDelay),
                tap(visible => !this.pressed && this.openChange.emit(visible)),
            ),
        ),
    );

    @Output()
    readonly openChange = new EventEmitter<boolean>();

    @Input('tuiDropdownShowDelay')
    @tuiDefaultProp()
    showDelay = this.options.showDelay;

    @Input('tuiDropdownHideDelay')
    @tuiDefaultProp()
    hideDelay = this.options.hideDelay;

    @Input()
    @tuiDefaultProp()
    set open(open: boolean) {
        if (!open) {
            this.pressed = false;
        }
    }

    constructor(
        @Inject(TuiHoveredService) private readonly hovered$: Observable<boolean>,
        @Inject(TUI_DROPDOWN_HOVER_OPTIONS)
        private readonly options: TuiDropdownHoverOptions,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    @HostListener('click')
    onPressed(): void {
        this.pressed = !this.pressed;
    }

    toggle(visible: boolean): void {
        this.toggle$.next(visible);
    }
}
