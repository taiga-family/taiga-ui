import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_NUMBER_FORMAT, TuiNumberFormatSettings} from '@taiga-ui/core';

const numberFormatSettings: TuiNumberFormatSettings = {
    decimalSeparator: '.',
    thousandSeparator: ',',
    zeroPadding: true,
    signMode: 'always',
};

@Component({
    selector: 'tui-input-range-example-2',
    templateUrl: './index.html',
    styles: ['tui-input-range {max-width: 30rem}'],
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_NUMBER_FORMAT,
            useValue: numberFormatSettings,
        },
    ],
})
export class TuiInputRangeExample2 {
    readonly max = 50_000_001;
    readonly min = -5_001;

    readonly control = new FormControl([this.min, this.max / 2]);
}
