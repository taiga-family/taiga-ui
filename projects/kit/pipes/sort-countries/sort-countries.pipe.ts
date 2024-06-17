import type {PipeTransform, Signal} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {TuiObservablePipe, tuiPure} from '@taiga-ui/cdk';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_COUNTRIES} from '@taiga-ui/kit/tokens';
import {map} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiSortCountries',
    pure: false,
})
export class TuiSortCountriesPipe extends TuiObservablePipe implements PipeTransform {
    private readonly countriesNames$ = inject(TUI_COUNTRIES);

    public transform(countries: readonly TuiCountryIsoCode[]): TuiCountryIsoCode[] {
        return this.getSignal(countries)();
    }

    @tuiPure
    private getSignal(
        countries: readonly TuiCountryIsoCode[],
    ): Signal<TuiCountryIsoCode[]> {
        return this.toSignal(
            this.countriesNames$.pipe(
                map(names =>
                    [...countries].sort((a, b) => names[a].localeCompare(names[b])),
                ),
            ),
            [],
        );
    }
}
