import {Component} from '@angular/core';
import type {TuiDay} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-calendar-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiCalendarExample6 {
    protected value: readonly TuiDay[] = [];

    protected onDayClick(day: TuiDay): void {
        this.value = this.value.find(item => item.daySame(day))
            ? this.value.filter(item => !item.daySame(day))
            : this.value.concat(day);
    }
}
