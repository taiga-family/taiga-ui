import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiNumberFormatSettings} from '@taiga-ui/core';
import {TuiIcon, TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiIcon,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTextfield,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = 1_234_567.89;
    protected numberFormat: Partial<TuiNumberFormatSettings> = {
        decimalSeparator: ',',
        thousandSeparator: '.',
    };
}
