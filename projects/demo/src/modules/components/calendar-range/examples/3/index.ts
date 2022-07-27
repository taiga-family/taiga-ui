import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';

@Component({
    selector: `tui-range-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiRangeExample3 {
    items = tuiCreateDefaultDayRangePeriods();
}
