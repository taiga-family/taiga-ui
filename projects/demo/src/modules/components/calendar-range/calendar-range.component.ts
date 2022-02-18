import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayLike,
    TuiMonth,
} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MARKER_HANDLER,
    TuiBaseColor,
    TuiColor,
    TuiMarkerHandler,
} from '@taiga-ui/core';
import {tuiCreateDefaultDayRangePeriods, TuiDayRangePeriod} from '@taiga-ui/kit';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

const TWO_DOTS: [TuiColor, TuiColor] = [TuiBaseColor.Primary, TuiBaseColor.Secondary];
const ONE_DOT: [TuiColor] = [TuiBaseColor.Success];

@Component({
    selector: 'example-calendar-range',
    templateUrl: './calendar-range.template.html',
    changeDetection,
})
export class ExampleTuiCalendarRangeComponent {
    readonly exampleModule = exampleModule;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly minVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
    ];

    readonly maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2018, 9, 30),
        new TuiDay(2020, 2, 5),
        new TuiDay(2300, 0, 1),
    ];

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<TuiDay>> = [
        ALWAYS_FALSE_HANDLER,
        ({day}) => day % 3 === 0,
    ];

    readonly defaultViewedMonthVariants: readonly TuiMonth[] = [
        TuiMonth.currentLocal(),
        TuiMonth.currentLocal().append({month: 1}),
        new TuiMonth(2007, 5),
    ];

    readonly itemsVariants: ReadonlyArray<readonly TuiDayRangePeriod[]> = [
        [],
        tuiCreateDefaultDayRangePeriods(),
    ];

    readonly minLengthVariants: readonly TuiDayLike[] = [{day: 3}, {day: 15}];

    readonly maxLengthVariants: readonly TuiDayLike[] = [{day: 5}, {month: 1}, {year: 1}];

    readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        TUI_DEFAULT_MARKER_HANDLER,
        (day: TuiDay) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
    ];

    markerHandler: TuiMarkerHandler = this.markerHandlerVariants[0];
    min: TuiDay = this.minVariants[0];
    max: TuiDay = this.maxVariants[0];
    cleaner = false;
    disabledItemHandler = this.disabledItemHandlerVariants[0];
    items = this.itemsVariants[0];
    defaultViewedMonth = this.defaultViewedMonthVariants[0];
    minLength: TuiDayLike | null = null;
    maxLength: TuiDayLike | null = null;
}
