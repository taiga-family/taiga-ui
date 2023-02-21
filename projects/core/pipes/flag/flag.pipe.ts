import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TUI_SVG_OPTIONS, TuiSvgOptions} from '@taiga-ui/core/components/svg';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

@Pipe({name: `tuiFlag`})
export class TuiFlagPipe implements PipeTransform {
    private readonly staticPath = this.svgOptions
        .path(`tuiIcon`)
        .replace(`tuiIcon.svg#tuiIcon`, ``);

    constructor(@Inject(TUI_SVG_OPTIONS) private readonly svgOptions: TuiSvgOptions) {}

    transform(countryIsoCode: TuiCountryIsoCode | string): string;
    transform(countryIsoCode?: TuiCountryIsoCode | string | null): string | null;
    transform(countryIsoCode?: TuiCountryIsoCode | string | null): string | null {
        if (!countryIsoCode) {
            return null;
        }

        switch (countryIsoCode) {
            case TuiCountryIsoCode.BL:
            case TuiCountryIsoCode.BQ:
            case TuiCountryIsoCode.CW:
            case TuiCountryIsoCode.GF:
            case TuiCountryIsoCode.GP:
            case TuiCountryIsoCode.MF:
            case TuiCountryIsoCode.MQ:
            case TuiCountryIsoCode.NC:
            case TuiCountryIsoCode.RE:
            case TuiCountryIsoCode.YT:
                return `${this.staticPath}${TuiCountryIsoCode.FR}.png`;
            case TuiCountryIsoCode.SX:
                return `${this.staticPath}${TuiCountryIsoCode.NL}.png`;
            default:
                return `${this.staticPath}${countryIsoCode}.png`;
        }
    }
}
