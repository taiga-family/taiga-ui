import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-number-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_NUMBER_FORMAT,
            useValue: {decimalSeparator: '.', thousandSeparator: ','},
        },
    ],
})
export class TuiInputNumberExample4 {
    testValue = new FormControl(1234.56);
}
