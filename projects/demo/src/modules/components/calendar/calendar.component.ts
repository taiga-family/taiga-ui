import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
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
    TuiMarkerHandler,
} from '@taiga-ui/core';

const TWO_DOTS: [string, string] = ['var(--tui-primary)', 'var(--tui-info-fill)'];
const ONE_DOT: [string] = ['var(--tui-success-fill)'];

@Component({
    selector: 'example-tui-calendar',
    templateUrl: './calendar.template.html',
    changeDetection,
})
export class ExampleTuiCalendarComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    readonly firstDayOfWeekToken = import(
        './examples/import/first-day-of-week-token.md?raw'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
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
