import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFlagPipe} from '@taiga-ui/core';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_COUNTRIES} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiFlagPipe, AsyncPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countryIsoCode: TuiCountryIsoCode = 'AE';
    protected readonly countriesNames$ = inject(TUI_COUNTRIES);
}
