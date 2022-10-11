import {QueryList} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

export function tuiLineChartDrivers(
    charts: QueryList<{drivers: QueryList<Observable<boolean>>}>,
): Observable<boolean> {
    return combineLatest(
        charts
            .map(({drivers}) => drivers.map(driver => driver.pipe(startWith(false))))
            .reduce((acc, drivers) => acc.concat(drivers), []),
    ).pipe(
        map(values => values.some(Boolean)),
        distinctUntilChanged(),
    );
}
