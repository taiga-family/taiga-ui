import {coerceArray} from '@angular/cdk/coercion';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    output,
    signal,
} from '@angular/core';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk/date-time';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {
    TUI_CALENDAR_OPTIONS,
    TuiCalendarSheetPipe,
} from '@taiga-ui/core/components/calendar';
import {TUI_SHORT_WEEK_DAYS} from '@taiga-ui/core/tokens';

/**
 * @deprecated: work in progress, do not use!
 */
@Component({
    selector: 'tui-calendar',
    imports: [TuiCalendarSheetPipe],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'(mouseleave)': 'hovered.set(null)'},
})
export class TuiCalendar {
    private readonly options = inject(TUI_CALENDAR_OPTIONS);
    private readonly days = inject(TUI_SHORT_WEEK_DAYS);
    protected readonly today = TuiDay.currentLocal();
    protected readonly hovered = signal<TuiDay | null>(null);

    protected readonly week = computed((week = convert(this.days())) => [
        ...week.slice(this.options.weekStart()),
        ...week.slice(0, this.options.weekStart()),
    ]);

    public readonly pick = output<TuiDay>();
    public readonly month = input(TuiMonth.currentLocal());
    public readonly value = input<TuiDay | TuiDayRange | readonly TuiDay[] | null>(null);

    public readonly disabledItemHandler =
        input<TuiBooleanHandler<TuiDay>>(TUI_FALSE_HANDLER);

    protected getRange(day: TuiDay): 'end' | 'middle' | 'single' | 'start' | null {
        const value = this.value() || [];

        if (!(value instanceof TuiDayRange)) {
            return coerceArray(value).find((item) => day.daySame(item)) ? 'single' : null;
        }

        const hovered = this.hovered();

        const range =
            value.from === value.to && hovered
                ? TuiDayRange.sort(hovered, value.to)
                : value;

        if (range.isSingleDay && day.daySame(range.from)) {
            return 'single';
        }

        if (day.daySame(range.from)) {
            return 'start';
        }

        if (day.daySame(range.to)) {
            return 'end';
        }

        return range.dayInRange(day) ? 'middle' : null;
    }
}

function convert(week: readonly string[]): readonly string[] {
    return [week[week.length - 1] || '', ...week.slice(0, week.length - 1)];
}
