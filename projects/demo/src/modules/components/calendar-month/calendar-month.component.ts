import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiMonth,
    TuiMonthRange,
    TuiYear,
} from '@taiga-ui/cdk';

@Component({
    selector: 'example-tui-calendar-month',
    templateUrl: './calendar-month.template.html',
    changeDetection,
})
export class ExampleTuiCalendarMonthComponent {
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

    protected readonly minVariants = [
        TUI_FIRST_DAY,
        new TuiMonth(2019, 2),
        new TuiMonth(2007, 0),
    ];

    protected readonly maxVariants = [
        TUI_LAST_DAY,
        new TuiMonth(2020, 2),
        new TuiMonth(2023, 0),
        new TuiMonth(2019, 4),
    ];

    protected min = this.minVariants[0];
    protected max = this.maxVariants[0];

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiMonth>
    > = [ALWAYS_FALSE_HANDLER, ({month}) => month % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected readonly valueVariants: ReadonlyArray<TuiMonth | TuiMonthRange> = [
        TuiDay.currentLocal(),
        new TuiMonthRange(
            TuiDay.currentLocal(),
            TuiDay.currentLocal().append({month: 3}),
        ),
        new TuiMonth(2007, 2),
    ];

    protected value: TuiMonth | TuiMonthRange | null = null;

    protected readonly yearVariants: readonly TuiYear[] = [
        TuiDay.currentLocal(),
        new TuiYear(2007),
    ];

    protected year = this.yearVariants[0];
}
