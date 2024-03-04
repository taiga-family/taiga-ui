import {isPlatformServer} from '@angular/common';
import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {defer, from, type Observable, shareReplay, switchMap} from 'rxjs';
import {fromFetch} from 'rxjs/fetch';

@Injectable({
    providedIn: 'root',
})
export class TuiStaticRequestService {
    private readonly win = inject(WINDOW);
    private readonly platformId = inject(PLATFORM_ID);
    private readonly cache = new Map<string, Observable<string>>();

    public request(url: string): Observable<string> {
        const cache = this.cache.get(url);

        if (cache) {
            return cache;
        }

        const response$ =
            'AbortController' in this.win || isPlatformServer(this.platformId)
                ? fromFetch(url)
                : /**
                   * Fallback for Firefox 55 and 56
                   * TODO: drop after browser support bump
                   */
                  defer(() => from(fetch(url)));

        const piped = response$.pipe(
            switchMap(async response => {
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
