import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core';

@Component({
    selector: 'tui-input-range-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
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
})
export class TuiInputRangeExample2 {
    readonly max = 50_000_001;
    readonly min = 5_001;

    testForm = new FormGroup({
        testValue: new FormControl([this.min, this.max / 2]),
    });
}
