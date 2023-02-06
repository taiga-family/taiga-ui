import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core';

@Component({
    selector: 'tui-input-number-example-5',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_NUMBER_FORMAT,
            useValue: {decimalSeparator: ',', thousandSeparator: '.'},
        },
    ],
})
export class TuiInputNumberExample5 {
    value = 123.56;
}
