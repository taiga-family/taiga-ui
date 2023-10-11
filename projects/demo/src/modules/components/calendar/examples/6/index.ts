import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-calendar-example-6',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiCalendarExample6 {
    value: readonly TuiDay[] = [];

    onDayClick(day: TuiDay): void {
        this.value = this.value.find(item => item.daySame(day))
            ? this.value.filter(item => !item.daySame(day))
            : this.value.concat(day);
    }
}
