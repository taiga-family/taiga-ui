import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DATE_FORMAT, TUI_DATE_SEPARATOR, TuiDay, TuiDayRange} from '@taiga-ui/cdk';

@Component({
    selector: `tui-input-date-range-example-3`,
    templateUrl: `./index.html`,
    providers: [
        {provide: TUI_DATE_FORMAT, useValue: `YMD`},
        {provide: TUI_DATE_SEPARATOR, useValue: `/`},
    ],
    changeDetection,
    encapsulation,
})
export class TuiInputDateRangeExample3 {
    readonly control = new FormControl(
        new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),
    );
}
