import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiProvide} from '@taiga-ui/cdk';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_ALL_COUNTRIES_ISO_CODES} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-phone-international',
    templateUrl: './input-phone-international.template.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, ExampleTuiInputPhoneInternationalComponent),
    ],
})
export class ExampleTuiInputPhoneInternationalComponent extends AbstractExampleTuiControl {
    public override cleaner = false;
    public override labelOutside = true;
    public control = new FormControl('', [Validators.required, Validators.minLength(9)]);

    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly countriesVariants: ReadonlyArray<readonly TuiCountryIsoCode[]> = [
        ['RU', 'KZ', 'UA', 'BY'],
        TUI_ALL_COUNTRIES_ISO_CODES,
    ];

    protected countries = this.countriesVariants[0];

    protected readonly countryIsoCodeVariants: readonly TuiCountryIsoCode[] = [
        'RU',
        'KZ',
        'UA',
        'BY',
    ];

    protected countryIsoCode = this.countryIsoCodeVariants[0];
}
