import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiMedia} from '@taiga-ui/core/interfaces';
import {TUI_MEDIA} from '@taiga-ui/core/tokens';
import {fromEvent, merge, Observable} from 'rxjs';
import {map, shareReplay, startWith} from 'rxjs/operators';

export type TuiBreakpointMediaKey = keyof Omit<TuiMedia, 'tablet'>;

export interface TuiBreakpoint {
    name: TuiBreakpointMediaKey;
    query: string;
    width: number;
}

/**
 * Service to provide the current breakpoint based on Taiga UI's media queries
 */
@Injectable({
    providedIn: `root`,
})
export class TuiBreakpointService extends Observable<TuiBreakpointMediaKey | null> {
    constructor(@Inject(TUI_MEDIA) media: TuiMedia, @Inject(WINDOW) win: Window) {
        const breakpoints = getBreakpoints(media);
        const events$ = breakpoints.map(({query}) =>
            fromEvent<MediaQueryListEvent>(win.matchMedia(query), `change`),
        );
        const media$ = merge(...events$).pipe(
            map(() => currentBreakpoint(breakpoints, win.innerWidth).name),
            startWith(currentBreakpoint(breakpoints, win.innerWidth).name),
            shareReplay({bufferSize: 1, refCount: true}),
        );

        super(subscriber => media$.subscribe(subscriber));
    }
}

function getBreakpoints(media: TuiMedia): TuiBreakpoint[] {
    return Object.entries(media).map(([name, width]) => ({
        name: name as TuiBreakpointMediaKey,
        /**
         * @note:
         * min-width query in css is inclusive, but in window.matchMedia it is exclusive
         * so we need to subtract 1px to get the same result
         */
        query: `(max-width: ${width - 1}px)`,
        width,
    }));
}

function currentBreakpoint(breakpoints: TuiBreakpoint[], innerWidth: number): TuiBreakpoint {
    return breakpoints.find(({width}) => innerWidth < width) ?? breakpoints.slice(-1)[0];
}
