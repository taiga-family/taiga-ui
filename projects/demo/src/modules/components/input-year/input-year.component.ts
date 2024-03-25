import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, TUI_FIRST_DAY, TUI_LAST_DAY} from '@taiga-ui/cdk';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-input-year',
    templateUrl: './input-year.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleInputYearComponent),
        },
    ],
})
export class ExampleInputYearComponent extends AbstractExampleTuiControl {
    public override cleaner = false;

    public control = new FormControl<number | null>(null, Validators.required);

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');

    protected readonly minVariants = [TUI_FIRST_DAY.year, 2019, 2007];
    protected readonly maxVariants = [TUI_LAST_DAY.year, 2020, 2023];

    protected min = this.minVariants[0];
    protected max = this.maxVariants[0];

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<number>
    > = [TUI_FALSE_HANDLER, year => year % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];
}
