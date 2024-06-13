import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {TUI_SVG_OPTIONS} from '@taiga-ui/core/components/svg';
import {TUI_CACHE_BUSTING_PAYLOAD} from '@taiga-ui/core/utils/miscellaneous';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';

@Pipe({
    standalone: true,
    name: 'tuiFlag',
})
export class TuiFlagPipe implements PipeTransform {
    private readonly svgOptions = inject(TUI_SVG_OPTIONS);

    private readonly staticPath = this.svgOptions
        .path('tuiIcon')
        .replace('tuiIcon.svg#tuiIcon', '')
        .replace(`tuiIcon.svg${TUI_CACHE_BUSTING_PAYLOAD}#tuiIcon`, '');

    public transform(countryIsoCode: TuiCountryIsoCode | string): string;
    public transform(
        countryIsoCode: TuiCountryIsoCode | string | undefined,
    ): string | null;
    public transform(countryIsoCode?: TuiCountryIsoCode | string | null): string | null;
    public transform(countryIsoCode?: TuiCountryIsoCode | string | null): string | null {
        if (!countryIsoCode) {
            return null;
        }

        return `${this.staticPath}flags/${countryIsoCode}.svg`;
    }
}
