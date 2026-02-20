import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {TuiDocInput} from '@demo/components/input';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiDropdown, TuiIcon} from '@taiga-ui/core';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
    TuiTooltip,
} from '@taiga-ui/kit';
import {getCountries} from 'libphonenumber-js';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocDropdown,
        TuiDocInput,
        TuiDocTextfield,
        TuiDropdown,
        TuiIcon,
        TuiInputPhoneInternational,
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

    protected readonly examples = [
        'Choose metadata',
        'Choose any countries',
        'Mobile dropdown',
        'Customize with icons',
        'Customize separator',
        'Use phone format helpers',
    ];
}
