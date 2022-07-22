import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAutofillFieldName} from '@taiga-ui/cdk';
import {TuiDecimalT} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-number',
    templateUrl: './input-number.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputNumberComponent),
        },
    ],
})
export class ExampleTuiInputNumberComponent extends AbstractExampleTuiControl {
    readonly exampleForm = import('./examples/import/declare-form.md?raw');
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    readonly minVariants: readonly number[] = [-Infinity, -500, 5, 25];

    min = this.minVariants[0];

    readonly maxVariants: readonly number[] = [Infinity, 10, 500];

    max = this.maxVariants[0];

    readonly alignVariants: readonly string[] = ['left', 'right'];

    align = this.alignVariants[0];

    readonly autocompleteVariants: TuiAutofillFieldName[] = ['off', 'transaction-amount'];

    autocomplete: TuiAutofillFieldName | '' = '';

    readonly decimalVariants: readonly TuiDecimalT[] = ['not-zero', 'always', 'never'];

    decimal = this.decimalVariants[0];

    cleaner = false;

    readonly precisionVariants: readonly number[] = [2, 3, 4];

    precision = this.precisionVariants[0];

    readonly postfixVariants: readonly string[] = ['', '$', 'GBP', 'Very long text'];

    prefix = this.postfixVariants[0];

    postfix = this.postfixVariants[0];

    readonly control = new FormControl(6432, Validators.required);
}
