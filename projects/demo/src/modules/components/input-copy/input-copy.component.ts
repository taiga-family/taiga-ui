import {Component, forwardRef, ViewChild} from '@angular/core';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';
import {FormControl, Validators} from '@angular/forms';
import {TuiAccountAutofillName} from '@taiga-ui/cdk';
import {TuiTextMaskOptions} from '@taiga-ui/core';
import {PolymorpheusContent, PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiReactiveField} from '../abstract/reactive-field';

const D = /\d/;

@Component({
    selector: 'example-input-copy',
    templateUrl: './input-copy.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputCopyComponent),
        },
    ],
})
export class ExampleTuiInputCopyComponent extends AbstractExampleTuiReactiveField {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
    readonly exampleDeclareForm = exampleDeclareForm;

    readonly control = new FormControl('', Validators.required);

    readonly maxLengthVariants: readonly number[] = [10];

    readonly autocompleteVariants = [
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

    readonly textMaskOptionsVariants: ReadonlyArray<TuiTextMaskOptions> = [
        {
            guide: false,
            mask: [D, D, D, D, D],
        },
        {
            guide: false,
            mask: [D, D, D, D, ' ', D, D, D, D, ' ', D, D, D, D, ' ', D, D, D, D],
        },
    ];

    textMaskOptions: TuiTextMaskOptions | null = null;

    readonly autocomplete: TuiAccountAutofillName | null = null;

    readonly maxLength = null;

    @ViewChild('customTemplate', {read: PolymorpheusTemplate})
    customTemplate: PolymorpheusContent = '';

    readonly successMessageVariants = ['Cкопировано', 'Шаблон'];

    successMessage = this.successMessageVariants[0];

    messageDirection = this.hintDirectionVariants[0];
    messageMode = this.hintModeVariants[0];

    get notificationTemplate(): PolymorpheusContent {
        return this.successMessage === 'Шаблон'
            ? this.customTemplate
            : this.successMessage;
    }
}
