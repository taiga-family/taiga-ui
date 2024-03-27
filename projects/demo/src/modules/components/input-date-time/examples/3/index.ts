import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {tuiDateFormatProvider} from '@taiga-ui/core';

@Component({
    selector: 'tui-input-date-time-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'YMD', separator: '/'})],
})
export class TuiInputDateTimeExample3 {
    protected readonly control = new FormControl([
        new TuiDay(2017, 2, 15),
        new TuiTime(12, 30),
    ]);
}
