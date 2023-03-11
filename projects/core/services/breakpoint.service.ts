import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {fromEvent, merge, Observable} from 'rxjs';
import {map, share, startWith} from 'rxjs/operators';

import {TuiMedia} from '../interfaces';
import {TUI_MEDIA} from '../tokens';

/**
 * Service to provide the current breakpoint based on Taiga UI's media queries
 */
@Injectable()
export class TuiBreakpointService extends Observable<string | null> {
    constructor(@Inject(TUI_MEDIA) media: TuiMedia, @Inject(WINDOW) windowRef: Window) {
        const breakpoints = getBreakpoints(media);
        const events$ = breakpoints.map(({query}) =>
            fromEvent<MediaQueryListEvent>(windowRef.matchMedia(query), `change`),
        );
        const media$ = merge(...events$).pipe(
            map(({media}) => breakpoints.find(({query}) => query === media)!.name),
            startWith(currentBreakpoint(breakpoints, windowRef).name),
            share(),
        );

        super(subscriber => media$.subscribe(subscriber));
    }
}

interface Breakpoint {
    name: string;
    query: string;
}

function getBreakpoints(media: TuiMedia): Breakpoint[] {
    return Object.entries(media).map(([name, value]) => ({
        name,
        query: `(max-width: ${value - 1}px)`,
    }));
}

function currentBreakpoint(breakpoints: Breakpoint[], windowRef: Window): Breakpoint {
    return breakpoints.find(({query}) => windowRef.matchMedia(query).matches)!;
}
