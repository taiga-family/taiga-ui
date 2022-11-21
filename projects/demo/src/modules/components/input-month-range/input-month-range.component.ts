import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiMonth,
} from '@taiga-ui/cdk';
import {TuiBooleanHandlerWithContext, TuiMonthContext} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-tui-input-month-range`,
    templateUrl: `./input-month-range.template.html`,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputMonthRangeComponent),
        },
    ],
})
export class ExampleTuiInputMonthRangeComponent extends AbstractExampleTuiControl {
    readonly exampleForm = import(`./examples/import/declare-form.md?raw`);
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

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

    readonly minVariants = [
        TUI_FIRST_DAY,
        new TuiMonth(2019, 2),
        new TuiMonth(2007, 0),
        new TuiDay(new Date().getFullYear() + 3, 1, 1),
    ];

    readonly maxVariants = [
        TUI_LAST_DAY,
        new TuiMonth(2017, 2),
        new TuiMonth(2020, 2),
        new TuiMonth(2023, 0),
    ];

    min = this.minVariants[0];
    max = this.maxVariants[0];

    readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>
    > = [ALWAYS_FALSE_HANDLER, ({month}) => month % 3 === 0];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    override cleaner = false;

    control = new FormControl(null, Validators.required);
}
