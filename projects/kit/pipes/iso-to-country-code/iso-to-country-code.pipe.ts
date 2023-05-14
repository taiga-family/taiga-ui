import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_COUNTRIES_MASKS} from '@taiga-ui/kit/tokens';
import {tuiIsoToCountryCode} from '@taiga-ui/kit/utils';

@Pipe({
    name: `tuiIsoToCountryCode`,
})
export class TuiIsoToCountryCodePipe implements PipeTransform {
    constructor(
        @Inject(TUI_COUNTRIES_MASKS)
        private readonly countriesMasks: Record<TuiCountryIsoCode, string>,
    ) {}

    transform(isoCode: TuiCountryIsoCode): string {
        return tuiIsoToCountryCode(this.countriesMasks, isoCode);
    }
}
