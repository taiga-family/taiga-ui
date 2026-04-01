import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    type TuiBooleanHandler,
    TuiDay,
    type TuiDayLike,
    TuiMonth,
} from '@taiga-ui/cdk';
import {type TuiMarkerHandler} from '@taiga-ui/core';
import {
    TuiCalendarRange,
    tuiCreateDefaultDayRangePeriods,
    type TuiDayRangePeriod,
} from '@taiga-ui/kit';

const TWO_DOTS: [string, string] = [
    'var(--tui-background-accent-1)',
    'var(--tui-status-info)',
];
const ONE_DOT: [string] = ['var(--tui-status-positive)'];

@Component({
    imports: [TuiCalendarRange, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly examples = [
        'Basic',
        'With value',
        'With ranges',
        'Localization',
        'With another range switcher',
    ];

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
        TuiDay.currentLocal(),
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

    protected readonly minLengthVariants: readonly TuiDayLike[] = [
        {day: 3},
        {day: 15},
        {month: 1},
        {month: 1, day: 1},
    ];

    protected readonly maxLengthVariants: readonly TuiDayLike[] = [
        {day: 5},
        {month: 1},
        {year: 1},
    ];

    protected readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        (day: TuiDay) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
    ];

    protected markerHandler: TuiMarkerHandler | null = null;
    protected min: TuiDay = this.minVariants[0]!;
    protected max: TuiDay = this.maxVariants[0]!;
    protected cleaner = false;
    protected disabledItemHandler = this.disabledItemHandlerVariants[0]!;
    protected items = this.itemsVariants[0]!;
    protected defaultViewedMonth = this.defaultViewedMonthVariants[0]!;
    protected minLength: TuiDayLike | null = null;
    protected maxLength: TuiDayLike | null = null;
    protected readonly routes = DemoRoute;
}
`;export{t as default};
