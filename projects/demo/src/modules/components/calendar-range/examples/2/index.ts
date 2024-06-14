import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TUI_CALENDAR_DATE_STREAM, TuiCalendarRange} from '@taiga-ui/kit';
import {of} from 'rxjs';

export const calendarStream$ = of(
    new TuiDayRange(new TuiDay(2019, 2, 11), new TuiDay(2019, 2, 14)),
);

@Component({
    standalone: true,
    imports: [TuiCalendarRange],
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
export default class Example {}
