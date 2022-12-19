import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_COUNTRIES} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({
    name: `tuiSortCountries`,
})
export class TuiSortCountriesPipe implements PipeTransform {
    constructor(
        @Inject(TUI_COUNTRIES)
        private readonly countriesNames$: Observable<Record<TuiCountryIsoCode, string>>,
    ) {}

    transform(countries: readonly TuiCountryIsoCode[]): Observable<TuiCountryIsoCode[]> {
        return this.countriesNames$.pipe(
            map(names => [...countries].sort((a, b) => names[a].localeCompare(names[b]))),
        );
    }
}
