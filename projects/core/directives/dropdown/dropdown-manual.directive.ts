import {Directive, Inject, Input, OnChanges, Optional} from '@angular/core';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {Subject} from 'rxjs';

import {TuiDropdownManualChangeDirective} from './dropdown-manual-change.directive';

@Directive({
    selector: '[tuiDropdown][tuiDropdownManual]',
    providers: [tuiAsDriver(TuiDropdownManualDirective)],
})
export class TuiDropdownManualDirective extends TuiDriver implements OnChanges {
    private readonly stream$ = new Subject<boolean>();

    @Input()
    tuiDropdownManual = false;

    constructor(
        @Optional()
        @Inject(TuiDropdownManualChangeDirective)
        readonly manualChange: TuiDropdownManualChangeDirective | null,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    ngOnChanges(): void {
        this.stream$.next(this.tuiDropdownManual);
        this.manualChange?.change.next(this.tuiDropdownManual);
    }
}
