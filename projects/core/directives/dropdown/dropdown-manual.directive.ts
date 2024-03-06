import type {OnChanges} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';
import {tuiAsDriver} from '@taiga-ui/core/abstract';

import {TuiDropdownDriver} from './dropdown.driver';

@Directive({
    standalone: true,
    selector: '[tuiDropdownManual]',
    providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
})
export class TuiDropdownManualDirective implements OnChanges {
    private readonly driver = inject(TuiDropdownDriver);

    @Input()
    public tuiDropdownManual = false;

    public ngOnChanges(): void {
        this.driver.next(this.tuiDropdownManual);
    }
}
