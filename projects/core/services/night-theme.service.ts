import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {fromEvent, Observable} from 'rxjs';
import {map, share, startWith} from 'rxjs/operators';

@Injectable({
    providedIn: `root`,
})
export class TuiNightThemeService extends Observable<boolean> {
    constructor(@Inject(WINDOW) windowRef: Window) {
        const media = windowRef.matchMedia(`(prefers-color-scheme: dark)`);
        const media$ = fromEvent(media, `change`).pipe(
            startWith(null),
            map(() => media.matches),
            share(),
        );

        super(subscriber => media$.subscribe(subscriber));
    }
}
