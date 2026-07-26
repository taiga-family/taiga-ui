import {coerceArray} from '@angular/cdk/coercion';
import {UpperCasePipe} from '@angular/common';
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
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiBooleanHandler, type TuiContext} from '@taiga-ui/cdk/types';
import {TuiCalendarSheetPipe} from '@taiga-ui/core/components/calendar';
import {TUI_SHORT_WEEK_DAYS} from '@taiga-ui/core/tokens';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_MONTH_OPTIONS} from './month.options';
import {TuiWeekPipe} from './week.pipe';

/**
 * @deprecated: work in progress, do not use!
 */
@Component({
    selector: 'tui-month',
    imports: [
        PolymorpheusOutlet,
        TuiCalendarSheetPipe,
        TuiMapperPipe,
        TuiWeekPipe,
        UpperCasePipe,
    ],
    templateUrl: './month.component.html',
    styleUrl: './month.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._ww]': 'showWeek()',
        '(mouseleave)': 'hovered.set(null)',
    },
})
export class TuiMonthComponent {
    private readonly days = inject(TUI_SHORT_WEEK_DAYS);
    private readonly options = inject(TUI_MONTH_OPTIONS);

    protected readonly today = TuiDay.currentLocal();
    protected readonly hovered = signal<TuiDay | null>(null);

    protected readonly week = computed((week = convert(this.days())) => [
        ...week.slice(this.options.weekFirstDay()),
        ...week.slice(0, this.options.weekFirstDay()),
    ]);

    public readonly pick = output<TuiDay>();
    public readonly month = input(TuiMonth.currentLocal());
    public readonly value = input<TuiDay | TuiDayRange | readonly TuiDay[] | null>(null);
    public readonly content = input<PolymorpheusContent<TuiContext<TuiDay>>>();
    public readonly dayType = input(this.options.dayType);
    public readonly showAdjacent = input(this.options.showAdjacent);
    public readonly showWeek = input(this.options.showWeek);

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

    protected getType(day: string): string {
        return day === this.days()[5] || day === this.days()[6] ? 'weekend' : '';
    }
}

function convert(week: readonly string[]): readonly string[] {
    return [week[week.length - 1] || '', ...week.slice(0, week.length - 1)];
}
