import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {TUI_ASSETS_PATH} from '@taiga-ui/core/tokens';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n/types';

@Pipe({
    standalone: true,
    name: 'tuiFlag',
})
export class TuiFlagPipe implements PipeTransform {
    private readonly staticPath = inject(TUI_ASSETS_PATH);

    public transform(countryIsoCode: TuiCountryIsoCode | string): string;
    public transform(
        countryIsoCode: TuiCountryIsoCode | string | undefined,
    ): string | null;
    public transform(countryIsoCode?: TuiCountryIsoCode | string | null): string | null;
    public transform(countryIsoCode?: TuiCountryIsoCode | string | null): string | null {
        if (!countryIsoCode) {
            return null;
        }

        return `${this.staticPath}/flags/${countryIsoCode.toLowerCase()}.svg`;
    }
}
