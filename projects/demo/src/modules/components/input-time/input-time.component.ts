import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    ALWAYS_FALSE_HANDLER,
    TuiBooleanHandler,
    TuiTime,
    TuiTimeMode,
} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-tui-input-time`,
    templateUrl: `./input-time.template.html`,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputTimeComponent),
        },
    ],
})
export class ExampleTuiInputTimeComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);

    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly exampleForm = import(`./examples/import/declare-form.md?raw`);

    readonly exampleOptions = import(`./examples/import/define-options.md?raw`);

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
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`./examples/5/index.ts?raw`),
        HTML: import(`./examples/5/index.html?raw`),
    };

    cleaner = false;

    control = new FormControl(TuiTime.currentLocal(), Validators.required);

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<TuiTime>> = [
        ALWAYS_FALSE_HANDLER,
        (item: TuiTime) => {
            return String(item) === `06:00` || item > TuiTime.currentLocal();
        },
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    readonly itemSizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = [`s`, `m`, `l`];

    itemSize: TuiSizeS | TuiSizeL = this.itemSizeVariants[1];

    readonly itemsVariants: ReadonlyArray<readonly TuiTime[]> = [
        [],
        tuiCreateTimePeriods(),
    ];

    items = this.itemsVariants[0];

    strict = false;

    readonly modeVariants: readonly TuiTimeMode[] = [`HH:MM`, `HH:MM:SS`, `HH:MM:SS.MSS`];

    mode = this.modeVariants[0];
}
