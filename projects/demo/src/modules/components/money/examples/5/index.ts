import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core';

@Component({
    selector: 'tui-money-example-5',
    templateUrl: './index.html',
    providers: [
        {
            provide: TUI_NUMBER_FORMAT,
            useValue: {
                decimalSeparator: '.',
                thousandSeparator: ',',
                zeroPadding: true,
            },
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiMoneyExample5 {}
