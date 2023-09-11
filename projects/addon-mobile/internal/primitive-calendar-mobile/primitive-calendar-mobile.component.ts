import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDay, TuiHandler, TuiInjectionTokenType} from '@taiga-ui/cdk';
import {
    TUI_DAY_TYPE_HANDLER,
    TUI_IS_IOS_RES,
    TUI_SHORT_WEEK_DAYS,
    TuiPrimitiveCalendarComponent,
} from '@taiga-ui/core';

/**
 * @internal
 */
@Component({
    selector: 'tui-primitive-calendar-mobile',
    templateUrl: './primitive-calendar-mobile.template.html',
    styleUrls: ['./primitive-calendar-mobile.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[$.class._ios]': 'isIOS$',
        '($.class._ios)': 'isIOS$',
    },
})
export class TuiPrimitiveCalendarMobileComponent extends TuiPrimitiveCalendarComponent {
    constructor(
        @Inject(TUI_IS_IOS_RES) readonly isIOS$: boolean,
        @Inject(TUI_SHORT_WEEK_DAYS)
        unorderedWeekDays$: TuiInjectionTokenType<typeof TUI_SHORT_WEEK_DAYS>,
        @Inject(TUI_DAY_TYPE_HANDLER) dayType: TuiHandler<TuiDay, string>,
    ) {
        super(unorderedWeekDays$, dayType);
    }
}
