import {Directive, inject, Input, OnChanges} from '@angular/core';
import {tuiAsDriver} from '@taiga-ui/core/abstract';

import {TuiDropdownDriver} from './dropdown.driver';

@Directive({
    selector: '[tuiDropdownManual]',
    standalone: true,
    providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
})
export class TuiDropdownManualDirective implements OnChanges {
    private readonly driver = inject(TuiDropdownDriver);

    @Input()
    tuiDropdownManual = false;

    ngOnChanges(): void {
        this.driver.next(this.tuiDropdownManual);
    }
}
