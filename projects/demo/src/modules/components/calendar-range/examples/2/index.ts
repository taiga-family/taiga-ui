import {Component} from '@angular/core';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';
import {of} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

export const calendarStream$ = of(
    new TuiDayRange(new TuiDay(2019, 2, 11), new TuiDay(2019, 2, 14)),
);

@Component({
    selector: 'tui-calendar-range-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_CALENDAR_DATE_STREAM,
            useValue: calendarStream$,
        },
    ],
})
export class TuiCalendarRangeExample2 {}
