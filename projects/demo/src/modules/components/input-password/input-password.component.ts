import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TuiAccountAutofillName} from '@taiga-ui/cdk';
import {AbstractExampleTuiReactiveField} from '../abstract/reactive-field';

import * as exampleDeclareForm from '!!raw-loader!./examples/import/declare-form.txt';
import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';
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
export class ExampleTuiInputPasswordComponent extends AbstractExampleTuiReactiveField {
    readonly exampleDeclareForm = exampleDeclareForm;
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        HTML: example1Html,
        LESS: example1Less,
        TypeScript: example1Ts,
    };

    readonly maxLengthVariants: ReadonlyArray<number> = [10];

    autocompleteVariants = ['off', 'new-password', 'current-password'];

    autocomplete: TuiAccountAutofillName | null = null;

    maxLength = null;

    control = new FormControl('', Validators.required);
}
