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
import {
    TUI_ORDERED_SHORT_WEEK_DAYS,
    TUI_PRIMITIVE_CALENDAR_PROVIDERS,
    TUI_START_DAY_OF_WEEK_INDEX,
    TuiPrimitiveCalendarComponent,
} from '@taiga-ui/core';
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
    providers: TUI_PRIMITIVE_CALENDAR_PROVIDERS,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPrimitiveCalendarMobileComponent extends TuiPrimitiveCalendarComponent {
    @Input()
    @tuiRequiredSetter()
    set month(month: TuiMonth) {
        const sheet: Array<ReadonlyArray<TuiDay>> = [];
        const localizedMonth = new TuiMonth(month.year, month.month, {
            startWeekDayIndex: this.startWeekDayIndex,
        });

        for (let rowIndex = 0; rowIndex < ROWS_COUNT; rowIndex++) {
            const row: Array<TuiDay> = [];

            for (let colIndex = 0; colIndex < DAYS_IN_WEEK; colIndex++) {
                const day = TuiDay.getDayFromMonthRowCol(
                    localizedMonth,
                    rowIndex,
                    colIndex,
                );

                if (day.month > localizedMonth.month && day.year >= localizedMonth.year) {
                    break;
                }

                if (day.month === localizedMonth.month) {
                    row.push(
                        TuiDay.getDayFromMonthRowCol(localizedMonth, rowIndex, colIndex),
                    );
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
        @Inject(TUI_ORDERED_SHORT_WEEK_DAYS)
        weekDays$: Observable<[string, string, string, string, string, string, string]>,
        @Inject(TUI_START_DAY_OF_WEEK_INDEX) startWeekDayIndex: number,
    ) {
        super(weekDays$, startWeekDayIndex);
        this.isIOS = isIOS;
    }
}
