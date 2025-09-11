import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCalendarRange, tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';

@Component({
    imports: [TuiCalendarRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = tuiCreateDefaultDayRangePeriods();
}
