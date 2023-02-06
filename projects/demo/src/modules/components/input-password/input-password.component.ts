import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAutofillFieldName} from '@taiga-ui/cdk';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-password',
    templateUrl: './input-password.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputPasswordComponent),
        },
    ],
})
export class ExampleTuiInputPasswordComponent extends AbstractExampleTuiControl {
    readonly exampleForm = import('!!raw-loader!./examples/import/declare-form.md');
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');
    readonly exampleOptions = import('!!raw-loader!./examples/import/define-options.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly maxLengthVariants: readonly number[] = [10];

    autocompleteVariants: TuiAutofillFieldName[] = [
        'off',
        'new-password',
        'current-password',
    ];

    autocomplete: TuiAutofillFieldName | '' = '';

    maxLength = null;

    control = new FormControl('', Validators.required);
}
