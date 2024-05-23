import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_COUNTRIES_MASKS} from '@taiga-ui/kit/tokens';
import {tuiIsoToCountryCode} from '@taiga-ui/kit/utils';

@Pipe({
    standalone: true,
    name: 'tuiIsoToCountryCode',
})
export class TuiIsoToCountryCodePipe implements PipeTransform {
    private readonly countriesMasks = inject(TUI_COUNTRIES_MASKS);

    public transform(isoCode: TuiCountryIsoCode): string {
        return tuiIsoToCountryCode(this.countriesMasks, isoCode);
    }
}
