import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAutofillFieldName, TuiInputModeT, TuiInputTypeT} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-textfield-controller',
    templateUrl: './textfield-controller.template.html',
    changeDetection,
})
export class ExampleTuiTextfieldControllerComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

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

    customContentSelected: string | null = null;

    autocompleteVariants: Array<TuiAutofillFieldName | ''> = [
        '',
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

    autocomplete = this.autocompleteVariants[0];
    cleaner = false;
    exampleText = '';
    labelOutside = false;
    size = this.sizeVariants[2];
    inputMode = this.inputModeVariants[0];
    maxLength: number | null = null;

    readonly control = new FormControl('111', Validators.required);
}
