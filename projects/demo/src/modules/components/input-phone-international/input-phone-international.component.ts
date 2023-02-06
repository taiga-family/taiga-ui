import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-phone-international',
    templateUrl: './input-phone-international.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputPhoneInternationalComponent),
        },
    ],
})
export class ExampleTuiInputPhoneInternationalComponent extends AbstractExampleTuiControl {
    readonly exampleForm = import('!!raw-loader!./examples/import/declare-form.md');
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
    };

    cleaner = false;

    readonly dropdownDirectionVariants: readonly TuiVerticalDirection[] = [
        'top',
        'bottom',
    ];

    dropdownDirection: TuiVerticalDirection | null = null;

    dropdownMinHeight = DEFAULT_MIN_HEIGHT;

    dropdownMaxHeight = DEFAULT_MAX_HEIGHT;

    control = new FormControl('', [Validators.required, Validators.minLength(9)]);

    readonly countriesVariants: ReadonlyArray<readonly TuiCountryIsoCode[]> = [
        [
            TuiCountryIsoCode.RU,
            TuiCountryIsoCode.KZ,
            TuiCountryIsoCode.UA,
            TuiCountryIsoCode.BY,
        ],
        Object.values(TuiCountryIsoCode),
    ];

    countries = this.countriesVariants[0];

    readonly countryIsoCodeVariants: readonly TuiCountryIsoCode[] = [
        TuiCountryIsoCode.RU,
        TuiCountryIsoCode.KZ,
        TuiCountryIsoCode.UA,
        TuiCountryIsoCode.BY,
    ];

    countryIsoCode = this.countryIsoCodeVariants[0];
    labelOutside = true;
}
