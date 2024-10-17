import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiLooseUnion} from '@taiga-ui/cdk/types';
import {TUI_ASSETS_PATH} from '@taiga-ui/core/tokens';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n/types';

type IsoCode = TuiLooseUnion<TuiCountryIsoCode>;

// TODO: Move to kit in v5
@Pipe({
    standalone: true,
    name: 'tuiFlag',
})
export class TuiFlagPipe implements PipeTransform {
    private readonly staticPath = inject(TUI_ASSETS_PATH);

    public transform(countryIsoCode: IsoCode): string;
    public transform(countryIsoCode: IsoCode | undefined): string | null;
    public transform(countryIsoCode?: IsoCode | null): string | null;
    public transform(countryIsoCode?: IsoCode | null): string | null {
        if (!countryIsoCode) {
            return null;
        }

        return `${this.staticPath}/flags/${countryIsoCode.toLowerCase()}.svg`;
    }
}
