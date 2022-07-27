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
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidthT,
    TuiSizeL,
    TuiSizeS,
    TuiVerticalDirection,
} from '@taiga-ui/core';
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
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);

    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly exampleForm = import(`!!raw-loader!./examples/import/declare-form.md`);

    readonly exampleOptions = import(`!!raw-loader!./examples/import/define-options.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        HTML: import(`!!raw-loader!./examples/4/index.html`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/5/index.ts`),
        HTML: import(`!!raw-loader!./examples/5/index.html`),
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

    readonly dropdownLimitWidthVariants: readonly TuiDropdownWidthT[] = [`fixed`, `min`];

    dropdownLimitWidth: TuiDropdownWidthT = this.dropdownLimitWidthVariants[0];

    readonly dropdownDirectionVariants: readonly TuiVerticalDirection[] = [
        `top`,
        `bottom`,
    ];

    dropdownDirection: TuiVerticalDirection | null = null;

    dropdownMinHeight = DEFAULT_MIN_HEIGHT;

    dropdownMaxHeight = DEFAULT_MAX_HEIGHT;

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
