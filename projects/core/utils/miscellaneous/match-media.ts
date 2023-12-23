import {fromEvent, map, Observable, startWith} from 'rxjs';

export function tuiMedia(query: string, win: Window): Observable<boolean> {
    const mediaQuery = win.matchMedia(query);

    return fromEvent<MediaQueryList>(mediaQuery, 'change').pipe(
        startWith(mediaQuery),
        map((list: MediaQueryList) => list.matches),
    );
}
