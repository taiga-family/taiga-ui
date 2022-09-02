import {Injectable} from '@angular/core';
import type {Observer} from 'rxjs';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

@Injectable({
    providedIn: `root`,
})
export class TuiStaticRequestService {
    private readonly cache = new Map<string, Observable<string>>();

    request(url: string): Observable<string> {
        const cache = this.cache.get(url);

        if (cache) {
            return cache;
        }

        const observable = new Observable((observer: Observer<string>) => {
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    const response = xhr.responseType ? xhr.response : xhr.responseText;

                    if (xhr.status === 200) {
                        observer.next(response);
                        observer.complete();
                    } else {
                        observer.error(response);
                    }
                }
            };

            xhr.open(`GET`, url);
            xhr.send();

            return () => {
                xhr.abort();
            };
        });
        const piped = observable.pipe(shareReplay({bufferSize: 1, refCount: false}));

        this.cache.set(url, piped);

        return piped;
    }
}
