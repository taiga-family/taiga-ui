import type {PipeTransform, Signal} from '@angular/core';
import {inject, INJECTOR, Pipe, untracked} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_COUNTRIES} from '@taiga-ui/kit/tokens';
import {map, Subject, takeUntil} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiSortCountries',
    pure: false,
})
export class TuiSortCountriesPipe implements PipeTransform {
    private readonly countriesNames$ = inject(TUI_COUNTRIES);
    private readonly destroy$ = new Subject<void>();
    private readonly injector = inject(INJECTOR);

    public transform(countries: readonly TuiCountryIsoCode[]): TuiCountryIsoCode[] {
        return this.getSignal(countries)();
    }

    @tuiPure
    private getSignal(
        countries: readonly TuiCountryIsoCode[],
    ): Signal<TuiCountryIsoCode[]> {
        this.destroy$.next();

        return untracked(() =>
            toSignal(
                this.countriesNames$.pipe(
                    map(names =>
                        [...countries].sort((a, b) => names[a].localeCompare(names[b])),
                    ),
                    takeUntil(this.destroy$),
                ),
                {injector: this.injector, initialValue: []},
            ),
        );
    }
}
