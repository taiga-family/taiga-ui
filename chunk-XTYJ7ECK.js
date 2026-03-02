import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_COUNTRIES, TuiFlagPipe} from '@taiga-ui/kit';

@Component({
    imports: [TuiFlagPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countryIsoCode: TuiCountryIsoCode = 'AE';
    protected readonly countriesNames = inject(TUI_COUNTRIES);
}
`;export{t as default};
