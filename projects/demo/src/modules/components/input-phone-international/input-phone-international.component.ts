import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {TuiCountryIsoCode} from '@taiga-ui/kit';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
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
    readonly exampleDeclareForm = exampleDeclareForm;
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
    };

    cleaner = false;

    readonly dropdownDirectionVariants: ReadonlyArray<TuiVerticalDirection> = [
        'top',
        'bottom',
    ];

    dropdownDirection: TuiVerticalDirection | null = null;

    dropdownMinHeight = DEFAULT_MIN_HEIGHT;

    dropdownMaxHeight = DEFAULT_MAX_HEIGHT;

    control = new FormControl('', [Validators.required, Validators.minLength(9)]);

    readonly countriesVariants: ReadonlyArray<ReadonlyArray<TuiCountryIsoCode>> = [
        [
            TuiCountryIsoCode.RU,
            TuiCountryIsoCode.KZ,
            TuiCountryIsoCode.UA,
            TuiCountryIsoCode.BY,
        ],
        Object.values(TuiCountryIsoCode),
    ];

    countries = this.countriesVariants[0];

    readonly countryIsoCodeVariants: ReadonlyArray<TuiCountryIsoCode> = [
        TuiCountryIsoCode.RU,
        TuiCountryIsoCode.KZ,
        TuiCountryIsoCode.UA,
        TuiCountryIsoCode.BY,
    ];

    countryIsoCode = this.countryIsoCodeVariants[0];
}
