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
        const breakpoints = tuiGetBreakpoints(media);
        const events$ = breakpoints.map(breakpoint =>
            fromEvent<MediaQueryListEvent>(
                windowRef.matchMedia(breakpoint.query),
                `change`,
            ),
        );
        const media$ = merge(...events$).pipe(
            map(event => event.media),
            map(media => breakpoints.find(breakpoint => breakpoint.query === media)!),
            startWith(tuiCurrentBreakpoint(breakpoints, windowRef)),
            map(media => media.name),
            share(),
        );

        super(subscriber => media$.subscribe(subscriber));
    }
}

export interface TuiBreakpoint {
    name: string;
    query: string;
}

export function tuiGetBreakpoints(media: TuiMedia): TuiBreakpoint[] {
    return Object.entries(media).map(([name, value]) => ({
        name,
        query: `(max-width: ${value - 1}px)`,
    }));
}

export function tuiCurrentBreakpoint(
    breakpoints: TuiBreakpoint[],
    windowRef: Window,
): TuiBreakpoint {
    return breakpoints.find(
        breakpoint => windowRef.matchMedia(breakpoint.query).matches,
    )!;
}
