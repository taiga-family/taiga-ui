import {Component} from '@angular/core';
import {tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-range-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiRangeExample3 {
    items = tuiCreateDefaultDayRangePeriods();
}
