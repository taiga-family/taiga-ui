import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAutofillFieldName, TuiInputModeT, TuiInputTypeT} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: `example-tui-textfield-controller`,
    templateUrl: `./textfield-controller.template.html`,
    changeDetection,
})
export class ExampleTuiTextfieldControllerComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = [`s`, `m`, `l`];

    readonly inputModeVariants: readonly TuiInputModeT[] = [`text`, `numeric`];

    readonly maxLengthVariants: readonly number[] = [10];

    readonly typeVariants: readonly TuiInputTypeT[] = [
        `text`,
        `email`,
        `password`,
        `tel`,
        `url`,
    ];

    type: TuiInputTypeT = this.typeVariants[0];

    readonly customContentVariants = [`Bell`];

    customContentSelected: string | null = null;

    autocompleteVariants: Array<TuiAutofillFieldName | ''> = [
        ``,
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

    autocomplete = this.autocompleteVariants[0];
    cleaner = false;
    exampleText = ``;
    labelOutside = false;
    size = this.sizeVariants[2];
    inputMode = this.inputModeVariants[0];
    maxLength: number | null = null;

    readonly control = new FormControl(`111`, Validators.required);
}
