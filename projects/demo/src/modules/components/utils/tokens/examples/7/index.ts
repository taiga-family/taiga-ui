import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocCode} from '@taiga-ui/addon-doc';
import {TuiDayOfWeek} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK, TuiLink} from '@taiga-ui/core';

@Component({
    imports: [NgForOf, RouterLink, TuiDocCode, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_FIRST_DAY_OF_WEEK,
            useValue: TuiDayOfWeek.Sunday,
        },
    ],
})
export default class Example {
    protected readonly provideFirstDayOfWeekToken = import(
        './provide-first-day-of-week-token.md?raw'
    );

    protected readonly customizableComponentsViaThisToken = [
        {
            name: 'Calendar',
            link: '/components/calendar',
            fragment: 'localization',
        },
        {
            name: 'CalendarRange',
            link: '/components/calendar-range',
            fragment: 'localization',
        },
        {
            name: 'MobileCalendar',
            link: '/components/mobile-calendar',
            fragment: 'localization',
        },
    ] as const;
}
