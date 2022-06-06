import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiMonth,
} from '@taiga-ui/cdk';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-input-month',
    templateUrl: './input-month.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleInputMonthComponent),
        },
    ],
})
export class ExampleInputMonthComponent extends AbstractExampleTuiControl {
    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');
    readonly exampleForm = import('!!raw-loader!./examples/import/declare-form.md');

    readonly minVariants = [TUI_FIRST_DAY, new TuiMonth(2019, 2), new TuiMonth(2007, 0)];
    readonly maxVariants = [TUI_LAST_DAY, new TuiMonth(2020, 2), new TuiMonth(2023, 0)];

    min = this.minVariants[0];
    max = this.maxVariants[0];

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<TuiMonth>> = [
        ALWAYS_FALSE_HANDLER,
        ({month}) => month % 3 === 0,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    cleaner = false;

    control = new FormControl(null, Validators.required);
}
