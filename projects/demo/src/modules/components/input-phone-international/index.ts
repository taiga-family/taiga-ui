import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiDropdown, TuiHint, TuiTextfield} from '@taiga-ui/core';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TuiInputPhoneInternational} from '@taiga-ui/kit';
import {getCountries} from 'libphonenumber-js';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentation} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        InheritedDocumentation,
        TuiDemo,
        TuiDropdown,
        TuiHint,
        TuiInputPhoneInternational,
        TuiTextfield,
        ReactiveFormsModule,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiControl {
    protected readonly countriesVariants: ReadonlyArray<readonly TuiCountryIsoCode[]> = [
        ['RU', 'KZ', 'UA', 'BY'],
        getCountries(),
    ];

    protected countries = this.countriesVariants[0];

    protected readonly countryIsoCodeVariants: readonly TuiCountryIsoCode[] = [
        'RU',
        'KZ',
        'UA',
        'BY',
    ];

    protected countryIsoCode = this.countryIsoCodeVariants[0];

    public override cleaner = false;
    public control = new FormControl('', [Validators.required, Validators.minLength(9)]);
}
