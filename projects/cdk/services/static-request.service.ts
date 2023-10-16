import {isPlatformServer} from '@angular/common';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {LOCATION, WINDOW} from '@ng-web-apis/common';
import {TUI_BASE_HREF} from '@taiga-ui/cdk/tokens';
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
        @Inject(TUI_BASE_HREF) private readonly baseHref: string,
        @Inject(LOCATION) private readonly locationRef: Location,
    ) {}

    request(url: string): Observable<string> {
        const cache = this.cache.get(url);

        if (cache) {
            return cache;
        }

        if (!url.startsWith(`http`)) {
            const hostname = `${this.locationRef.protocol}//${this.locationRef.hostname}`;
            const port = this.locationRef.port ? `:${this.locationRef.port}` : ``;
            const baseUrl =
                `${hostname}${port}/` !== this.baseHref
                    ? `${hostname}${port}/${this.baseHref}`
                    : this.baseHref;

            url = `${baseUrl}/${url}`.replace(/(https?:\/\/)|(\/)+/g, `$1$2`);
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
