import {Component} from '@angular/core';
import {tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-calendar-range-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiCalendarRangeExample3 {
    protected items = tuiCreateDefaultDayRangePeriods();
}
