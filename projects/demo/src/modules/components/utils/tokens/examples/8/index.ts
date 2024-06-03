import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocCodeComponent} from '@taiga-ui/addon-doc';
import {TuiDayOfWeek} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK, TuiLinkDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDocCodeComponent, NgForOf, TuiLinkDirective, RouterLink],
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
export default class ExampleComponent {
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
