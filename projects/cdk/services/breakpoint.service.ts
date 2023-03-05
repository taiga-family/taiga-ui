import {ChangeDetectorRef, Inject, Injectable, InjectionToken, Self} from '@angular/core';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {Observable} from 'rxjs';
import {distinctUntilChanged, startWith, takeUntil} from 'rxjs/operators';

import {TuiDestroyService} from './destroy.service';

// will replace after resolving dependency cycle issue
const TUI_MEDIA = new InjectionToken<TuiMedia>(`[TUI_MEDIA]: Token for media constant`, {
    factory: () => ({
        mobile: 768,
        desktopSmall: 1024,
        desktopLarge: 1280,
    }),
});
export interface TuiMedia {
    readonly mobile: number;
    readonly tablet?: number;
    readonly desktopSmall: number;
    readonly desktopLarge: number;
}

/**
 * Service to provide the current breakpoint based on Taiga UI's media queries
 */
@Injectable()
export class TuiBreakpointService extends Observable<string> {
    private readonly breakpoint$: Observable<string>;

    constructor(
        @Inject(TUI_MEDIA) private readonly media: TuiMedia,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
    ) {
        super(subscriber => this.breakpoint$.subscribe(subscriber));

        this.breakpoint$ = new Observable<string>(observer => {
            const queries = this.breakpoints.map(el => el.query);
            const mediaQueries = queries.map(query => window.matchMedia(query));

            const handleChange = (event: MediaQueryListEvent): void => {
                const breakpoint = this.breakpoints.find(el => el.query === event.media)!;

                observer.next(breakpoint.name);
            };

            mediaQueries.forEach(query => query.addEventListener(`change`, handleChange));

            return () =>
                mediaQueries.forEach(query =>
                    query.removeEventListener(`change`, handleChange),
                );
        }).pipe(
            distinctUntilChanged(),
            startWith(this.currentBreakpoint.name),
            tuiWatch(changeDetectorRef),
            takeUntil(destroy$),
        );
    }

    get breakpoints(): Breakpoint[] {
        return Object.entries(this.media).map(([name, value]) => ({
            name,
            query: `(max-width: ${value - 1}px)`,
        }));
    }

    get currentBreakpoint(): Breakpoint {
        return this.breakpoints.find(
            bp => window.matchMedia(bp.query).media === bp.query,
        )!;
    }
}

interface Breakpoint {
    name: string;
    query: string;
}
