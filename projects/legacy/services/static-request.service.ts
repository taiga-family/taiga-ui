import {Injectable} from '@angular/core';
import {type Observable, shareReplay, switchMap} from 'rxjs';
import {fromFetch} from 'rxjs/fetch';

/**
 * @deprecated: drop in v5.0
 */
@Injectable({
    providedIn: 'root',
})
export class TuiStaticRequestService {
    private readonly cache = new Map<string, Observable<string>>();

    public request(url: string): Observable<string> {
        const cache = this.cache.get(url);

        if (cache) {
            return cache;
        }

        const piped = fromFetch(url).pipe(
            switchMap(async (response) => {
                if (response.ok) {
                    return response.text();
                }

                throw new Error(`Failed to load ${url} (${response.statusText})`);
            }),
            shareReplay({bufferSize: 1, refCount: false}),
        );

        this.cache.set(url, piped);

        return piped;
    }
}
