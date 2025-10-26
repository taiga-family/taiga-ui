import {Directive, effect, inject, input} from '@angular/core';
import {tuiAsDriver} from '@taiga-ui/core/classes';

import {TuiDropdownDriver} from './dropdown.driver';

@Directive({
    selector: '[tuiDropdownManual]',
    providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
})
export class TuiDropdownManual {
    private readonly driver = inject(TuiDropdownDriver);

    public readonly tuiDropdownManual = input<boolean | ''>(false);

    protected readonly driverEffect = effect(() =>
        this.driver.next(!!this.tuiDropdownManual()),
    );
}
