import {Directive, inject, input, type OnChanges} from '@angular/core';
import {tuiAsDriver} from '@taiga-ui/core/classes';

import {TuiDropdownDriver} from './dropdown.driver';

@Directive({
    selector: '[tuiDropdownManual]',
    providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
})
export class TuiDropdownManual implements OnChanges {
    private readonly driver = inject(TuiDropdownDriver);

    public readonly tuiDropdownManual = input<boolean | ''>(false);

    public ngOnChanges(): void {
        this.driver.next(!!this.tuiDropdownManual());
    }
}
