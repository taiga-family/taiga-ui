import {isPlatformServer} from '@angular/common';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {defer, from, Observable} from 'rxjs';
import {fromFetch} from 'rxjs/fetch';
import {shareReplay, switchMap} from 'rxjs/operators';

@Injectable({
    providedIn: `root`,
})
export class TuiStaticRequestService {
    private readonly cache = new Map<string, Observable<string>>();

    constructor(
        @Inject(WINDOW) private readonly win: Window,
        @Inject(PLATFORM_ID) private readonly platformId: Record<string, unknown>,
    ) {}

    request(url: string): Observable<string> {
        const cache = this.cache.get(url);

        if (cache) {
            return cache;
        }

        const response$ =
            `AbortController` in this.win || isPlatformServer(this.platformId)
                ? fromFetch(url)
                : /**
                   * Fallback for Firefox 55 and 56
                   * TODO: drop after browser support bump
                   */
                  defer(() => from(fetch(url)));

        const piped = response$.pipe(
            switchMap(async res => res.text()),
            shareReplay({bufferSize: 1, refCount: false}),
        );

        this.cache.set(url, piped);

        return piped;
    }
}
