import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiFlagPipe} from '@taiga-ui/core';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_ALL_COUNTRIES_ISO_CODES} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiFlagPipe],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected countryIsoCodeVariants = TUI_ALL_COUNTRIES_ISO_CODES;
    protected countryIsoCode: TuiCountryIsoCode = 'FR';

    protected get apiCodeDemo(): string {
        return `<img [src]="'${this.countryIsoCode}' | tuiFlag" />`;
    }
}
