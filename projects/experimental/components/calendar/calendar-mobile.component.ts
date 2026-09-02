import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {tuiDateClamp, TuiDay, TuiDayRange, type TuiMonth} from '@taiga-ui/cdk/date-time';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {TuiButton} from '@taiga-ui/core/components/button';
import {AbstractTuiCalendar} from '@taiga-ui/core/components/calendar';
import {tuiTextfieldOptionsProvider} from '@taiga-ui/core/components/textfield';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';
import {TuiMonthComponent} from '@taiga-ui/experimental/components/month';
import {TuiScrollWheel} from '@taiga-ui/experimental/components/scroll-wheel';

import {TuiCalendarHeader} from './calendar-header.component';
import {TuiDatePicker} from './date-picker';

/**
 * @deprecated: work in progress, do not use!
 */
@Component({
    selector: 'tui-calendar-mobile',
    // eslint-disable-next-line @taiga-ui/experience-next/short-tui-imports
    imports: [TuiButton, TuiCalendarHeader, TuiMonthComponent, TuiScrollWheel],
    templateUrl: './calendar-mobile.component.html',
    styleUrl: './calendar-mobile.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsAuxiliary(TuiCalendarMobileComponent),
        tuiProvide(AbstractTuiCalendar, TuiCalendarMobileComponent),
        tuiTextfieldOptionsProvider({size: signal('m'), cleaner: signal(false)}),
    ],
})
export class TuiCalendarMobileComponent<
    T extends 'multi' | 'range' | 'single',
> extends TuiDatePicker<T> {
    protected override updateMonth(): void {}

    protected override getMonth(month: number): TuiMonth {
        return this.month().append({month});
    }

    protected setMonth({year, month}: TuiMonth): void {
        this.value.set(
            new TuiDayRange(
                tuiDateClamp(new TuiDay(year, month, 1), this.min(), this.max()),
                tuiDateClamp(
                    new TuiDay(year, month, 1).append({month: 1, day: -1}),
                    this.min(),
                    this.max(),
                ),
            ) as any,
        );
    }

    protected getAppearance(month: TuiMonth): 'primary' | 'secondary-grayscale' {
        const value = this.value();

        if (value instanceof TuiDayRange) {
            const {from, to} = value;
            const start = from.monthSame(month) && from.day === 1;
            const end = to.monthSame(month) && to.day === month.daysCount;

            return (from.monthBefore(month) || start) && (to.monthAfter(month) || end)
                ? 'primary'
                : 'secondary-grayscale';
        } else {
            return 'secondary-grayscale';
        }
    }
}
