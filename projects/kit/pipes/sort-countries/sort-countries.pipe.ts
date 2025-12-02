import {
    computed,
    inject,
    Pipe,
    type PipeTransform,
    signal,
    untracked,
} from '@angular/core';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n/types';
import {TUI_COUNTRIES} from '@taiga-ui/kit/tokens';

@Pipe({
    name: 'tuiSortCountries',
    pure: false,
})
export class TuiSortCountriesPipe implements PipeTransform {
    private readonly names = inject(TUI_COUNTRIES);
    private readonly countries = signal<readonly TuiCountryIsoCode[]>([]);
    private readonly result = computed((names = this.names()) =>
        [...this.countries()].sort((a, b) => names[a].localeCompare(names[b])),
    );

    public transform(countries: readonly TuiCountryIsoCode[]): TuiCountryIsoCode[] {
        untracked(() => this.countries.set(countries));

        return this.result();
    }
}
