import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {MASK_AFTER_CODE_REGEXP} from '@taiga-ui/kit/constants';
import {TUI_COUNTRIES_MASKS} from '@taiga-ui/kit/tokens';

@Pipe({
    name: `tuiIsoToCountryCode`,
})
export class TuiIsoToCountryCodePipe implements PipeTransform {
    constructor(
        @Inject(TUI_COUNTRIES_MASKS)
        readonly countriesMasks: Record<TuiCountryIsoCode, string>,
    ) {}

    transform(isoCode: TuiCountryIsoCode): string {
        return this.countriesMasks[isoCode].replace(MASK_AFTER_CODE_REGEXP, ``);
    }
}
