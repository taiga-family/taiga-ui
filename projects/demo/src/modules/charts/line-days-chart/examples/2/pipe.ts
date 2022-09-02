import type {PipeTransform} from '@angular/core';
import {Inject, Pipe} from '@angular/core';
import type {TuiDayRange} from '@taiga-ui/cdk';
import {TuiDay, TuiMonth} from '@taiga-ui/cdk';
import {TUI_MONTHS} from '@taiga-ui/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({
    name: `labels`,
})
export class LabelsPipe implements PipeTransform {
    constructor(
        @Inject(TUI_MONTHS) private readonly months$: Observable<readonly string[]>,
    ) {}

    transform({from, to}: TuiDayRange): Observable<readonly string[]> {
        const length = TuiDay.lengthBetween(from, to);

        if (length > 90) {
            return this.months$.pipe(
                map(months =>
                    Array.from(
                        {length: TuiMonth.lengthBetween(from, to) + 1},
                        (_, i) => months[from.append({month: i}).month],
                    ),
                ),
            );
        }

        const range = Array.from({length}, (_, day) => from.append({day}));
        const mondays = onlyMondays(range);
        const days = range.map(String);

        if (length > 60) {
            return of(even(mondays));
        }

        if (length > 14) {
            return of(mondays);
        }

        if (length > 7) {
            return of(even(days));
        }

        return of(days);
    }
}

function onlyMondays(range: readonly TuiDay[]): readonly string[] {
    return range.filter(day => !day.dayOfWeek()).map(String);
}

function even<T>(array: readonly T[]): readonly T[] {
    return array.filter((_, i) => !(i % 2));
}
