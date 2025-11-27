import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayOfWeek} from '@taiga-ui/cdk';
import {TuiCalendar, tuiCalendarOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiCalendarOptionsProvider({weekStart: TuiDayOfWeek.Sunday})],
})
export default class Example {
    protected value = new TuiDay(2025, 6, 4);
}
