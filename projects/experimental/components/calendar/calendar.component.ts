import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    output,
} from '@angular/core';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {type TuiDay, TuiMonth} from '@taiga-ui/cdk/date-time';
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
})
export class TuiCalendar {
    private readonly options = inject(TUI_CALENDAR_OPTIONS);
    private readonly days = inject(TUI_SHORT_WEEK_DAYS);

    protected readonly week = computed((week = convert(this.days())) => [
        ...week.slice(this.options.weekStart()),
        ...week.slice(0, this.options.weekStart()),
    ]);

    public readonly pick = output<TuiDay>();
    public readonly month = input(TuiMonth.currentLocal());
    public readonly value = input<TuiDay | null>(null);

    public readonly disabledItemHandler =
        input<TuiBooleanHandler<TuiDay>>(TUI_FALSE_HANDLER);
}

function convert(week: readonly string[]): readonly string[] {
    return [week[week.length - 1] || '', ...week.slice(0, week.length - 1)];
}
