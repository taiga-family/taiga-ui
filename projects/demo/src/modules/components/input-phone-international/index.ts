import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiDocAppearance} from '@demo/components/appearance';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiDropdown, TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiInputPhoneInternational} from '@taiga-ui/experimental';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {tuiInputPhoneInternationalOptionsProvider, TuiTooltip} from '@taiga-ui/kit';
import {getCountries} from 'libphonenumber-js';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocAppearance,
        TuiDocControl,
        TuiDocDropdown,
        TuiDocIcons,
        TuiDocTextfield,
        TuiDropdown,
        TuiIcon,
        TuiInputPhoneInternational,
        TuiTextfield,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiInputPhoneInternationalOptionsProvider({
            metadata: import('libphonenumber-js/max/metadata').then((m) => m.default),
        }),
    ],
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    protected readonly appearances = ['textfield', 'outline', 'outline-grayscale'];
    protected readonly countriesVariants: ReadonlyArray<readonly TuiCountryIsoCode[]> = [
        ['RU', 'KZ', 'UA', 'BY'],
        getCountries(),
    ];

    protected countries = this.countriesVariants[0]!;
    protected countrySearch = false;

    protected readonly countryIsoCodeVariants: readonly TuiCountryIsoCode[] = [
        'RU',
        'KZ',
        'UA',
        'BY',
    ];

    protected countryIsoCode = this.countryIsoCodeVariants[0]!;

    protected formControl = new FormControl('', [
        Validators.required,
        Validators.minLength(9),
    ]);
}
