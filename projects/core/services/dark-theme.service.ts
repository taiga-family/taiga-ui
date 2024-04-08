import {inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {fromEvent, map, Observable, shareReplay, startWith} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TuiDarkThemeService extends Observable<boolean> {
    constructor() {
        const media = inject(WINDOW).matchMedia('(prefers-color-scheme: dark)');
        const media$ = fromEvent(media, 'change').pipe(
            startWith(null),
            map(() => media.matches),
            shareReplay({bufferSize: 1, refCount: true}),
        );

        super(subscriber => media$.subscribe(subscriber));
    }
}
