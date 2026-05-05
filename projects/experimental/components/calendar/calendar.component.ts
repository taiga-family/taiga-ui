import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    output,
} from '@angular/core';
import {type TuiDay, TuiMonth} from '@taiga-ui/cdk/date-time';
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

    public readonly month = input(TuiMonth.currentLocal());
    public readonly value = input<TuiDay | null>(null);
    public readonly pick = output<TuiDay>();
}

function convert(week: readonly string[]): readonly string[] {
    return [week[week.length - 1] || '', ...week.slice(0, week.length - 1)];
}
