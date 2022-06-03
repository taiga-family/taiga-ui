import {Component} from '@angular/core';
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
    selector: 'tui-input-number-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_NUMBER_FORMAT,
            useValue: numberFormatSettings,
        },
    ],
})
export class TuiInputNumberExample4 {
    value = 1234.56;
}
