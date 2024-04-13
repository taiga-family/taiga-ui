import {Component} from '@angular/core';
import {TuiFlagPipe} from '@taiga-ui/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiFlagPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly countryIsoCode = TuiCountryIsoCode.AE;
}
