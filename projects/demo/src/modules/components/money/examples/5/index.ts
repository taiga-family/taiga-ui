import {Component} from '@angular/core';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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
