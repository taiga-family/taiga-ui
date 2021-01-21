import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {
    DAYS_IN_WEEK,
    TUI_IS_IOS,
    TuiDay,
    TuiMonth,
    tuiRequiredSetter,
} from '@taiga-ui/cdk';
import {TUI_SHORT_WEEK_DAYS, TuiPrimitiveCalendarComponent} from '@taiga-ui/core';
import {Observable} from 'rxjs';

const ROWS_COUNT = 6;

/**
 * @internal
 * @dynamic
 */
@Component({
    selector: 'tui-primitive-calendar-mobile',
    templateUrl: './primitive-calendar-mobile.template.html',
    styleUrls: ['./primitive-calendar-mobile.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPrimitiveCalendarMobileComponent extends TuiPrimitiveCalendarComponent {
    @Input()
    @tuiRequiredSetter()
    set month(month: TuiMonth) {
        const sheet: Array<ReadonlyArray<TuiDay>> = [];

        for (let rowIndex = 0; rowIndex < ROWS_COUNT; rowIndex++) {
            const row: Array<TuiDay> = [];

            for (let colIndex = 0; colIndex < DAYS_IN_WEEK; colIndex++) {
                const day = TuiDay.getDayFromMonthRowCol(month, rowIndex, colIndex);

                if (day.month > month.month && day.year >= month.year) {
                    break;
                }

                if (day.month === month.month) {
                    row.push(TuiDay.getDayFromMonthRowCol(month, rowIndex, colIndex));
                }
            }

            sheet.push(row);
        }

        this.sheet = sheet.filter(row => row.length);
    }

    @HostBinding('class._ios')
    readonly isIOS: boolean;

    constructor(
        @Inject(TUI_IS_IOS) isIOS: boolean,
        @Inject(TUI_SHORT_WEEK_DAYS)
        weekDays$: Observable<[string, string, string, string, string, string, string]>,
    ) {
        super(weekDays$);
        this.isIOS = isIOS;
    }
}
