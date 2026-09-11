import {Component, LOCALE_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat, type TuiNumberFormatSettings} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

import {intlThousandSeparatorPattern} from './intl-pattern';

@Component({
    imports: [FormsModule, TuiInputNumber, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [{provide: LOCALE_ID, useValue: 'en-IN'}],
})
export default class Example {
    protected value: number | null = 123_456_789;

    protected readonly numberFormat: Partial<TuiNumberFormatSettings> = {
        thousandSeparator: ',',
        thousandSeparatorPattern: intlThousandSeparatorPattern(),
    };
}
