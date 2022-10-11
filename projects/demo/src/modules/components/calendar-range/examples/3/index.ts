import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';

@Component({
    selector: `tui-calendar-range-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiCalendarRangeExample3 {
    items = tuiCreateDefaultDayRangePeriods();
}
