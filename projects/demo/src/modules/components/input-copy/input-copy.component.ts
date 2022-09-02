import {Component, forwardRef, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAutofillFieldName} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-input-copy`,
    templateUrl: `./input-copy.template.html`,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputCopyComponent),
        },
    ],
})
export class ExampleTuiInputCopyComponent extends AbstractExampleTuiControl {
    @ViewChild(`customTemplate`)
    customTemplate: PolymorpheusContent = ``;

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
    readonly exampleForm = import(`./examples/import/declare-form.md?raw`);

    readonly control = new FormControl(``, Validators.required);

    override readonly maxLengthVariants: readonly number[] = [10];

    override readonly autocompleteVariants: TuiAutofillFieldName[] = [
        `off`,
        `cc-name`,
        `cc-number`,
        `cc-exp-month`,
        `cc-exp-year`,
        `cc-type`,
        `given-name`,
        `additional-name`,
        `family-name`,
        `username`,
        `email`,
        `street-address`,
        `postal-code`,
        `country-name`,
    ];

    override readonly autocomplete: TuiAutofillFieldName | '' = ``;

    override readonly maxLength = null;

    readonly successMessageVariants = [`Copied`, `Template`];

    successMessage = this.successMessageVariants[0];

    messageDirection = this.hintDirectionVariants[0];
    messageMode = this.hintAppearanceVariants[0];

    get notificationTemplate(): PolymorpheusContent {
        return this.successMessage === `Template`
            ? this.customTemplate
            : this.successMessage;
    }
}
