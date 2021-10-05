import {Component} from '@angular/core';
import {TuiMonth} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-calendar-month-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiMonthExample1 {
    value: TuiMonth | null = null;
    hoveredMonth: TuiMonth | null = null;

    onMonthClick(month: TuiMonth) {
        this.value = month;
    }

    onMonthHovered(month: TuiMonth | null) {
        this.hoveredMonth = month;
    }
}
