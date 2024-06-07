import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiBooleanHandler, TuiDayLike} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiMonth,
} from '@taiga-ui/cdk';
import type {TuiMarkerHandler} from '@taiga-ui/core';
import {TuiLinkDirective} from '@taiga-ui/core';
import type {TuiDayRangePeriod} from '@taiga-ui/kit';
import {TuiCalendarRangeComponent, tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';

const TWO_DOTS: [string, string] = ['var(--tui-primary)', 'var(--tui-info-fill)'];
const ONE_DOT: [string] = ['var(--tui-success-fill)'];

@Component({
    standalone: true,
    imports: [TuiDemo, TuiCalendarRangeComponent, TuiLinkDirective, RouterLink],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    protected readonly examples = ['Basic', 'With value', 'With ranges', 'Localization'];

    protected readonly minVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
    ];

    protected readonly maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2018, 9, 30),
        new TuiDay(2020, 2, 5),
        new TuiDay(2300, 0, 1),
    ];

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [TUI_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected readonly defaultViewedMonthVariants: readonly TuiMonth[] = [
        TuiMonth.currentLocal(),
        TuiMonth.currentLocal().append({month: 1}),
        new TuiMonth(2007, 5),
    ];

    protected readonly itemsVariants: ReadonlyArray<readonly TuiDayRangePeriod[]> = [
        [],
        tuiCreateDefaultDayRangePeriods(),
    ];

    protected readonly minLengthVariants: readonly TuiDayLike[] = [{day: 3}, {day: 15}];

    protected readonly maxLengthVariants: readonly TuiDayLike[] = [
        {day: 5},
        {month: 1},
        {year: 1},
    ];

    protected readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        (day: TuiDay) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
    ];

    protected markerHandler: TuiMarkerHandler | null = null;
    protected min: TuiDay = this.minVariants[0];
    protected max: TuiDay = this.maxVariants[0];
    protected cleaner = false;
    protected disabledItemHandler = this.disabledItemHandlerVariants[0];
    protected items = this.itemsVariants[0];
    protected defaultViewedMonth = this.defaultViewedMonthVariants[0];
    protected minLength: TuiDayLike | null = null;
    protected maxLength: TuiDayLike | null = null;
    protected readonly routes = DemoRoute;
}
