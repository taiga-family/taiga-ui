import {inject, Injectable} from '@angular/core';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {TUI_COUNTRIES} from '@taiga-ui/kit';
import type {Observable} from 'rxjs';
import {delay, map} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DatabaseServer {
    protected readonly countries$: Observable<string[]> = inject(TUI_COUNTRIES).pipe(
        map(Object.values),
    );

    // Request imitation
    public request$(query: string): Observable<readonly string[]> {
        return this.countries$.pipe(
            map((countries) =>
                countries.filter((item) => TUI_DEFAULT_MATCHER(item, query)),
            ),
            delay(Math.random() * 2_000 + 1_000),
        );
    }
}
