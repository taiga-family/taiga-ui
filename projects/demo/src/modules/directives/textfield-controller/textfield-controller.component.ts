import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TuiAutofillFieldName, TuiInputModeT, TuiInputTypeT} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-textfield-controller',
    templateUrl: './textfield-controller.template.html',
    changeDetection,
})
export class ExampleTuiTextfieldControllerComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    readonly inputModeVariants: readonly TuiInputModeT[] = ['text', 'numeric'];

    readonly maxLengthVariants: readonly number[] = [10];

    readonly typeVariants: readonly TuiInputTypeT[] = [
        'text',
        'email',
        'password',
        'tel',
        'url',
    ];

    type: TuiInputTypeT = this.typeVariants[0];

    readonly customContentVariants = ['Bell'];

    customContentSelected = null;

    autocompleteVariants = [
        'off',
        'cc-name',
        'cc-number',
        'cc-exp-month',
        'cc-exp-year',
        'cc-type',
        'given-name',
        'additional-name',
        'family-name',
        'username',
        'email',
        'street-address',
        'postal-code',
        'country-name',
    ];

    autocomplete: TuiAutofillFieldName | null = null;
    cleaner = false;
    exampleText = '';
    labelOutside = false;
    size = this.sizeVariants[2];
    inputMode = this.inputModeVariants[0];
    maxLength = null;

    readonly control = new FormControl('111', Validators.required);
}
