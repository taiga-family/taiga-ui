import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
} from '@taiga-ui/kit';
import {defer} from 'rxjs';

@Component({
    imports: [FormsModule, TuiInputPhoneInternational],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        /**
         * You can choose: lazily load metadata or include it in your bundle.
         * Lazy loading:
         */
        tuiInputPhoneInternationalOptionsProvider({
            metadata: defer(async () =>
                import('libphonenumber-js/max/metadata').then((m) => m.default),
            ),
        }),
        /**
         * Eager loading:
         * \`\`\`ts
         * import metadata from 'libphonenumber-js/mobile/metadata';
         * import {of} from 'rxjs';
         * // [...]
         * tuiInputPhoneInternationalOptionsProvider({
         *     metadata: of(metadata),
         * }),
         * \`\`\`
         */
    ],
})
export default class Example {
    protected readonly countries: readonly TuiCountryIsoCode[] = [
        'IN',
        'CN',
        'US',
        'ID',
        'PK',
    ];

    protected countryIsoCode: TuiCountryIsoCode = 'US';
    protected value = '+12125552368';
}
`;export{e as default};
