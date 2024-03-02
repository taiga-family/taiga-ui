import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    type TuiBooleanHandler,
    TuiDay,
    type TuiDayLike,
    type TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER, type TuiMarkerHandler} from '@taiga-ui/core';
import {tuiCreateDefaultDayRangePeriods, type TuiDayRangePeriod} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

const TWO_DOTS: [string, string] = ['var(--tui-primary)', 'var(--tui-info-fill)'];
const ONE_DOT: [string] = ['var(--tui-success-fill)'];

@Component({
    selector: 'example-tui-input-date-range',
    templateUrl: './input-date-range.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputDateRangeComponent),
        },
    ],
})
export class ExampleTuiInputDateRangeComponent extends AbstractExampleTuiControl {
    public override cleaner = false;
    public control = new FormControl<TuiDayRange | null>(null, Validators.required);

    public override readonly maxLengthVariants: readonly TuiDayLike[] = [
        {day: 5},
        {month: 1},
        {year: 1},
    ];

    public override maxLength: TuiDayLike | null = null;

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');

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
        'value-transformers.ts': import('./examples/4/value-transformers.ts?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    protected readonly dayVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2021, 2, 5),
        new TuiDay(1900, 0, 1),
        new TuiDay(2300, 0, 1),
        new TuiDay(2017, 11, 11),
        new TuiDay(new Date().getFullYear() + 3, 1, 1),
        TUI_LAST_DAY,
    ];

    protected min: TuiDay = this.dayVariants[0];

    protected readonly minLengthVariants: readonly TuiDayLike[] = [{day: 3}, {day: 15}];

    protected minLength: TuiDayLike | null = null;

    protected max = this.dayVariants[this.dayVariants.length - 1];

    protected readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        TUI_DEFAULT_MARKER_HANDLER,
        (day: TuiDay) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
    ];

    protected markerHandler: TuiMarkerHandler = this.markerHandlerVariants[0];

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [ALWAYS_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected readonly itemsVariants: ReadonlyArray<readonly TuiDayRangePeriod[]> = [
        [],
        tuiCreateDefaultDayRangePeriods(),
    ];

    protected items = this.itemsVariants[0];

    protected readonly defaultViewedMonthVariants: readonly TuiMonth[] = [
        TuiMonth.currentLocal(),
        TuiMonth.currentLocal().append({month: 1}),
        new TuiMonth(2007, 5),
    ];

    protected defaultViewedMonth = this.defaultViewedMonthVariants[0];
}
