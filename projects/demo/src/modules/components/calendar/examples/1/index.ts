import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDay} from '@taiga-ui/cdk';
import {TuiCalendarModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-calendar-example-1',
    imports: [NgIf, TuiCalendarModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiCalendarExample1 {
    protected value: TuiDay | null = null;

    protected onDayClick(day: TuiDay): void {
        this.value = day;
    }
}
