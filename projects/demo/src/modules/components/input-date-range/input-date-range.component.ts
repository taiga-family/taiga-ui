import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayLike,
    TuiMonth,
} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER, TuiMarkerHandler} from '@taiga-ui/core';
import {tuiCreateDefaultDayRangePeriods, TuiDayRangePeriod} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

const TWO_DOTS: [string, string] = [`var(--tui-primary)`, `var(--tui-info-fill)`];
const ONE_DOT: [string] = [`var(--tui-success-fill)`];

@Component({
    selector: `example-tui-input-date-range`,
    templateUrl: `./input-date-range.template.html`,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputDateRangeComponent),
        },
    ],
})
export class ExampleTuiInputDateRangeComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
    readonly exampleForm = import(`./examples/import/declare-form.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
        'value-transformers.ts': import(`./examples/4/value-transformers.ts?raw`),
    };

    readonly dayVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2021, 2, 5),
        new TuiDay(1900, 0, 1),
        new TuiDay(2300, 0, 1),
        TUI_LAST_DAY,
    ];

    min: TuiDay = this.dayVariants[0];

    readonly minLengthVariants: readonly TuiDayLike[] = [{day: 3}, {day: 15}];

    minLength: TuiDayLike | null = null;

    readonly maxLengthVariants: readonly TuiDayLike[] = [{day: 5}, {month: 1}, {year: 1}];

    maxLength: TuiDayLike | null = null;

    max = this.dayVariants[this.dayVariants.length - 1];

    readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        TUI_DEFAULT_MARKER_HANDLER,
        (day: TuiDay) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
    ];

    markerHandler: TuiMarkerHandler = this.markerHandlerVariants[0];

    cleaner = false;

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<TuiDay>> = [
        ALWAYS_FALSE_HANDLER,
        ({day}) => day % 3 === 0,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    control = new FormControl(null, Validators.required);

    readonly itemsVariants: ReadonlyArray<readonly TuiDayRangePeriod[]> = [
        [],
        tuiCreateDefaultDayRangePeriods(),
    ];

    items = this.itemsVariants[0];

    readonly defaultViewedMonthVariants: readonly TuiMonth[] = [
        TuiMonth.currentLocal(),
        TuiMonth.currentLocal().append({month: 1}),
        new TuiMonth(2007, 5),
    ];

    defaultViewedMonth = this.defaultViewedMonthVariants[0];
}
