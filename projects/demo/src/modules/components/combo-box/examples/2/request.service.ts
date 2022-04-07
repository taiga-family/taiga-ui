import {Inject, Injectable} from '@angular/core';
import {TUI_DEFAULT_MATCHER, TuiDestroyService} from '@taiga-ui/cdk';
import {Observable, of, Subject} from 'rxjs';
import {
    delay,
    distinctUntilChanged,
    shareReplay,
    startWith,
    switchMap,
    takeUntil,
} from 'rxjs/operators';

import {databaseMockData} from './database-mock-data';
import {User} from './user';

// @dynamic
@Injectable()
export class RequestService {
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

    constructor(@Inject(TuiDestroyService) private readonly destroy$: Observable<void>) {}

    request(query: string | null): Observable<readonly User[] | null> {
        this.request$.next(query || '');

        return this.response$;
    }
}
