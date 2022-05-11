import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MARKER_HANDLER,
    TuiAlertService,
    TuiBaseColor,
    TuiColor,
    TuiMarkerHandler,
} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as exampleFirstDayOfWeekToken} from '!!raw-loader!./examples/import/first-day-of-week-token.txt';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

const TWO_DOTS: [TuiColor, TuiColor] = [TuiBaseColor.Primary, TuiBaseColor.Secondary];
const ONE_DOT: [TuiColor] = [TuiBaseColor.Success];

@Component({
    selector: 'example-tui-calendar',
    templateUrl: './calendar.template.html',
    changeDetection,
})
export class ExampleTuiCalendarComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;
    readonly firstDayOfWeekToken = exampleFirstDayOfWeekToken;

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

    showAdjacent = true;

    readonly minVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
    ];

    min = this.minVariants[0];

    readonly maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2020, 3, 30),
        new TuiDay(2300, 0, 1),
    ];

    max = this.maxVariants[0];

    readonly minViewedMonthVariants = [
        new TuiMonth(0, 0),
        new TuiMonth(2017, 2),
        new TuiMonth(1900, 0),
    ];

    minViewedMonth = this.minViewedMonthVariants[0];

    readonly maxViewedMonthVariants = [
        TUI_LAST_DAY,
        new TuiMonth(2020, 3),
        new TuiMonth(2300, 0),
    ];

    maxViewedMonth = this.maxViewedMonthVariants[0];

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<TuiDay>> = [
        ALWAYS_FALSE_HANDLER,
        ({day}) => day % 3 === 0,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        TUI_DEFAULT_MARKER_HANDLER,
        (day: TuiDay) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
    ];

    markerHandler: TuiMarkerHandler = this.markerHandlerVariants[0];

    readonly valueVariants: ReadonlyArray<TuiDay | TuiDayRange> = [
        TuiDay.currentLocal(),
        new TuiDayRange(TuiDay.currentLocal(), TuiDay.currentLocal().append({day: 3})),
        new TuiDay(2020, 3, 21),
    ];

    value: TuiDay | TuiDayRange | null = null;

    month = TuiMonth.currentLocal();

    hoveredItem: TuiDay | null = null;

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {}

    onDayClick(day: TuiDay): void {
        this.alertService.open(String(day)).subscribe();
    }
}
