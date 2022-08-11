import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidth,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-tui-input-phone`,
    templateUrl: `./input-phone.template.html`,
    styleUrls: [`./input-phone.style.less`],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputPhoneComponent),
        },
    ],
})
export class ExampleTuiInputPhoneComponent extends AbstractExampleTuiControl {
    readonly exampleForm = import(`./examples/import/declare-form.md?raw`);
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
        LESS: import(`./examples/3/index.less?raw`),
    };

    cleaner = false;

    readonly dropdownAlignVariants: readonly TuiHorizontalDirection[] = [`left`, `right`];

    dropdownAlign: TuiHorizontalDirection = this.dropdownAlignVariants[0];

    readonly dropdownLimitWidthVariants: readonly TuiDropdownWidth[] = [`fixed`, `min`];

    dropdownLimitWidth: TuiDropdownWidth = this.dropdownLimitWidthVariants[0];

    readonly dropdownDirectionVariants: readonly TuiVerticalDirection[] = [
        `bottom`,
        `top`,
    ];

    dropdownDirection: TuiVerticalDirection | null = null;

    dropdownMinHeight = DEFAULT_MIN_HEIGHT;

    dropdownMaxHeight = DEFAULT_MAX_HEIGHT;

    control = new FormControl(``, [Validators.required, Validators.minLength(12)]);

    countryCodes = [`+7`, `+850`, `+1`, `+52`];

    countryCode = this.countryCodes[0];

    phoneMasksAfterCountryCode = [
        `(###) ###-##-##`,
        `(####)+____:-#############`,
        `### ###-####`,
    ];

    phoneMaskAfterCountryCode = this.phoneMasksAfterCountryCode[0];
}
