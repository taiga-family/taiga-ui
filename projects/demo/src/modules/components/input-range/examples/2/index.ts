import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNumberFormatProvider} from '@taiga-ui/core';

@Component({
    selector: 'tui-input-range-example-2',
    templateUrl: './index.html',
    styles: [
        `
            tui-input-range {
                max-width: 30rem;
            }
        `,
    ],
    encapsulation,
    changeDetection,
    providers: [
        tuiNumberFormatProvider({
            decimalSeparator: '.',
            thousandSeparator: ',',
            zeroPadding: true,
        }),
    ],
})
export class TuiInputRangeExample2 {
    protected readonly max = 50_000_001;
    protected readonly min = 5_001;

    protected readonly control = new FormControl([this.min, this.max / 2]);
}
