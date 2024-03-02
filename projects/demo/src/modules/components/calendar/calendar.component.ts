import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    type TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER, type TuiMarkerHandler} from '@taiga-ui/core';

const TWO_DOTS: [string, string] = ['var(--tui-primary)', 'var(--tui-info-fill)'];
const ONE_DOT: [string] = ['var(--tui-success-fill)'];

@Component({
    selector: 'example-tui-calendar',
    templateUrl: './calendar.template.html',
    changeDetection,
})
export class ExampleTuiCalendarComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
    };

    protected readonly example7: TuiDocExample = {
        TypeScript: import('./examples/7/index.ts?raw'),
        HTML: import('./examples/7/index.html?raw'),
    };

    protected showAdjacent = true;

    protected readonly minVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
    ];

    protected min = this.minVariants[0];

    protected readonly maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2020, 3, 30),
        new TuiDay(2300, 0, 1),
    ];

    protected max = this.maxVariants[0];

    protected readonly minViewedMonthVariants = [
        new TuiMonth(0, 0),
        new TuiMonth(2017, 2),
        new TuiMonth(1900, 0),
    ];

    protected minViewedMonth = this.minViewedMonthVariants[0];

    protected readonly maxViewedMonthVariants = [
        TUI_LAST_DAY,
        new TuiMonth(2020, 3),
        new TuiMonth(2300, 0),
    ];

    protected maxViewedMonth = this.maxViewedMonthVariants[0];

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [ALWAYS_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        TUI_DEFAULT_MARKER_HANDLER,
        (day: TuiDay) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
    ];

    protected markerHandler: TuiMarkerHandler = this.markerHandlerVariants[0];

    protected readonly valueVariants: ReadonlyArray<TuiDay | TuiDayRange> = [
        TuiDay.currentLocal(),
        new TuiDayRange(TuiDay.currentLocal(), TuiDay.currentLocal().append({day: 3})),
        new TuiDay(2020, 3, 21),
    ];

    protected value: TuiDay | TuiDayRange | null = null;

    protected month = TuiMonth.currentLocal();

    protected hoveredItem: TuiDay | null = null;
}
