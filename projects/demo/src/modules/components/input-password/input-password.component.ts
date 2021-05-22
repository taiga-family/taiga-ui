import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TuiAccountAutofillName} from '@taiga-ui/cdk';
import {AbstractExampleTuiControl} from '../abstract/control';

import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleDefineOptions} from '!!raw-loader!./examples/import/define-options.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
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
    readonly exampleDeclareForm = exampleDeclareForm;
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
    readonly exampleDefineOptions = exampleDefineOptions;

    readonly example1: FrontEndExample = {
        HTML: example1Html,
        TypeScript: example1Ts,
    };

    readonly example2: FrontEndExample = {
        HTML: example2Html,
        TypeScript: example2Ts,
    };

    readonly maxLengthVariants: readonly number[] = [10];

    autocompleteVariants = ['off', 'new-password', 'current-password'];

    autocomplete: TuiAccountAutofillName | null = null;

    maxLength = null;

    control = new FormControl('', Validators.required);
}
