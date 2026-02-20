import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
} from '@taiga-ui/kit';
import {getCountries} from 'libphonenumber-js';
import {defer} from 'rxjs';

@Component({
    imports: [FormsModule, TuiInputPhoneInternational],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputPhoneInternationalOptionsProvider({
            metadata: defer(async () =>
                import('libphonenumber-js/max/metadata').then((m) => m.default),
            ),
            separator: ' ',
        }),
    ],
})
export default class Example {
    protected readonly countries = getCountries();
    protected countryIsoCode: TuiCountryIsoCode = 'FR';
    protected value = '';
}
`;export{t as default};
