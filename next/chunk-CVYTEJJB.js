import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TuiFlagPipe} from '@taiga-ui/kit';
import {getCountries} from 'libphonenumber-js';

@Component({
    imports: [TuiDemo, TuiFlagPipe],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected countryIsoCodeVariants = getCountries();
    protected countryIsoCode: TuiCountryIsoCode = 'FR';

    protected get apiCodeDemo(): string {
        return \`<img [src]="'\${this.countryIsoCode}' | tuiFlag" />\`;
    }
}
`;export{t as default};
