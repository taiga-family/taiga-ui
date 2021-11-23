import {Component} from '@angular/core';
import {TuiDay} from '@taiga-ui/cdk';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-calendar-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiCalendarExample1 {
    value: TuiDay | null = null;

    onDayClick(day: TuiDay) {
        this.value = day;
    }
}
