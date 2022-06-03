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
    readonly exampleForm = import('!!raw-loader!./examples/import/declare-form.txt');
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.txt');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.txt');

    readonly example1: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/1/index.html'),
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
        LESS: import('!!raw-loader!./examples/4/index.less'),
    };

    readonly minVariants: readonly number[] = [-Infinity, -500, 5, 25];

    min = this.minVariants[0];

    readonly maxVariants: readonly number[] = [Infinity, 10, 500];

    max = this.maxVariants[0];

    readonly autocompleteVariants: TuiAutofillFieldName[] = ['off', 'transaction-amount'];

    autocomplete: TuiAutofillFieldName | '' = '';

    readonly decimalVariants: readonly TuiDecimalT[] = ['not-zero', 'always', 'never'];

    decimal = this.decimalVariants[0];

    cleaner = false;

    readonly precisionVariants: readonly number[] = [2, 3, 4];

    precision = this.precisionVariants[0];

    readonly postfixVariants: readonly string[] = ['', '$', 'GBP'];

    prefix = this.postfixVariants[0];

    postfix = this.postfixVariants[0];

    readonly control = new FormControl(6432, Validators.required);
}
