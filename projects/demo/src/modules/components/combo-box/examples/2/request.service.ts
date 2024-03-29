import {inject, Injectable} from '@angular/core';
import {TUI_DEFAULT_MATCHER, TuiDestroyService} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {
    delay,
    distinctUntilChanged,
    of,
    shareReplay,
    startWith,
    Subject,
    switchMap,
    takeUntil,
} from 'rxjs';

import {databaseMockData} from './database-mock-data';
import type {User} from './user';

@Injectable()
export class RequestService {
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly request$ = new Subject<string>();

    // Imitating server request with switchMap + delay pair
    private readonly response$ = this.request$.pipe(
        distinctUntilChanged(),
        switchMap(query =>
            of(databaseMockData.filter(user => TUI_DEFAULT_MATCHER(user, query))).pipe(
                delay(Math.random() * 1000 + 500),
                startWith(null),
            ),
        ),
        takeUntil(this.destroy$),
        shareReplay({bufferSize: 1, refCount: true}),
    );

    public request(query: string | null): Observable<readonly User[] | null> {
        this.request$.next(query || '');

        return this.response$;
    }
}
