import {Directive, Input, OnChanges} from '@angular/core';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {BehaviorSubject} from 'rxjs';

@Directive({
    selector: '[tuiDropdown][tuiDropdownManual]',
    providers: [tuiAsDriver(TuiDropdownManualDirective)],
})
export class TuiDropdownManualDirective extends TuiDriver implements OnChanges {
    private readonly stream$ = new BehaviorSubject(false);

    @Input()
    tuiDropdownManual = false;

    readonly type = 'dropdown';

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    ngOnChanges(): void {
        this.stream$.next(this.tuiDropdownManual);
    }
}
