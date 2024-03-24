import {inject, Injectable, NgZone} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk';
import {TUI_WINDOW_SIZE, tuiCreateToken, tuiZoneOptimized} from '@taiga-ui/cdk';
import type {TuiMedia} from '@taiga-ui/core/interfaces';
import {TUI_MEDIA} from '@taiga-ui/core/tokens';
import {distinctUntilChanged, identity, map, Observable, shareReplay} from 'rxjs';

export type TuiBreakpointMediaKey = keyof Omit<TuiMedia, 'tablet'>;

export const TUI_BREAKPOINT_INTERCEPTOR =
    tuiCreateToken<TuiHandler<TuiBreakpointMediaKey, TuiBreakpointMediaKey>>(identity);

/**
 * Service to provide the current breakpoint based on Taiga UI's media queries
 */
@Injectable({
    providedIn: 'root',
})
export class TuiBreakpointService extends Observable<TuiBreakpointMediaKey | null> {
    private readonly mapper = inject(TUI_BREAKPOINT_INTERCEPTOR);
    private readonly media = inject(TUI_MEDIA);
    private readonly sorted: number[] = Object.values(this.media).sort((a, b) => a - b);
    private readonly invert: Record<number, TuiBreakpointMediaKey> = Object.keys(
        this.media,
    ).reduce(
        (ret, key) => ({
            ...ret,
            [this.media[key as TuiBreakpointMediaKey]]: key,
        }),
        {},
    );

    private readonly stream$ = inject(TUI_WINDOW_SIZE).pipe(
        map(({width}) => this.sorted.find(size => size > width)),
        map(key => this.invert[key || this.sorted[this.sorted.length - 1]]),
        map(size => this.mapper(size)),
        distinctUntilChanged(),
        tuiZoneOptimized(inject(NgZone)),
        shareReplay({bufferSize: 1, refCount: true}),
    );

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }
}
