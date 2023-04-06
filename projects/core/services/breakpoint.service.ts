import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiMedia} from '@taiga-ui/core/interfaces';
import {TUI_MEDIA} from '@taiga-ui/core/tokens';
import {fromEvent, merge, Observable} from 'rxjs';
import {map, shareReplay, startWith} from 'rxjs/operators';

/**
 * Service to provide the current breakpoint based on Taiga UI's media queries
 */
@Injectable({
    providedIn: `root`,
})
export class TuiBreakpointService extends Observable<MediaKey | null> {
    constructor(@Inject(TUI_MEDIA) media: TuiMedia, @Inject(WINDOW) windowRef: Window) {
        const breakpoints = getBreakpoints(media);
        const events$ = breakpoints.map(({query}) =>
            fromEvent<MediaQueryListEvent>(windowRef.matchMedia(query), `change`),
        );
        const media$ = merge(...events$).pipe(
            map(() => currentBreakpoint(breakpoints, windowRef.innerWidth).name),
            startWith(currentBreakpoint(breakpoints, windowRef.innerWidth).name),
            shareReplay({bufferSize: 1, refCount: true}),
        );

        super(subscriber => media$.subscribe(subscriber));
    }
}

type MediaKey = Omit<keyof TuiMedia, 'tablet'>;

interface Breakpoint {
    name: MediaKey;
    query: string;
    width: number;
}

function getBreakpoints(media: TuiMedia): Breakpoint[] {
    return Object.entries(media).map(([name, width]) => ({
        name: name as MediaKey,
        /**
         * @note:
         * min-width query in css is inclusive, but in window.matchMedia it is exclusive
         * so we need to subtract 1px to get the same result
         */
        query: `(max-width: ${width - 1}px)`,
        width,
    }));
}

function currentBreakpoint(breakpoints: Breakpoint[], innerWidth: number): Breakpoint {
    return breakpoints.find(({width}) => innerWidth < width) ?? breakpoints.slice(-1)[0];
}
