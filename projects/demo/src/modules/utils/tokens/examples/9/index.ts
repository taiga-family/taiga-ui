import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDayOfWeek} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core';

@Component({
    selector: 'tui-token-example-9',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_FIRST_DAY_OF_WEEK,
            useValue: TuiDayOfWeek.Sunday,
        },
    ],
})
export class TuiTokensExample9 {
    readonly provideFirstDayOfWeekToken = import(
        './provide-first-day-of-week-token.md?raw'
    );

    readonly customizableComponentsViaThisToken = [
        {name: 'Calendar', fragment: 'localization', link: '/components/calendar'},
        {
            name: 'CalendarRange',
            fragment: 'localization',
            link: '/components/calendar-range',
        },
        {
            name: 'MobileCalendar',
            fragment: 'localization',
            link: '/components/mobile-calendar',
        },
    ] as const;
}
