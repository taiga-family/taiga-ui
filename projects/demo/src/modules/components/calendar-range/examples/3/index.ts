import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCalendarRangeModule, tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCalendarRangeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected items = tuiCreateDefaultDayRangePeriods();
}
