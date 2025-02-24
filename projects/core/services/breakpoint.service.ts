import {inject, Injectable} from '@angular/core';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TUI_WINDOW_SIZE} from '@taiga-ui/cdk/tokens';
import type {TuiMedia} from '@taiga-ui/core/tokens';
import {TUI_MEDIA} from '@taiga-ui/core/tokens';
import {distinctUntilChanged, map, Observable, shareReplay} from 'rxjs';

export type TuiBreakpointMediaKey = keyof Omit<TuiMedia, 'tablet'>;

/**
 * Service to provide the current breakpoint based on Taiga UI's media queries
 */
@Injectable({
    providedIn: 'root',
})
export class TuiBreakpointService extends Observable<TuiBreakpointMediaKey | null> {
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
        map(({width}) => this.sorted.find((size) => size > width)),
        map(
            (key) => this.invert[key || this.sorted[this.sorted.length - 1] || 0] ?? null,
        ),
        distinctUntilChanged(),
        tuiZoneOptimized(),
        shareReplay({bufferSize: 1, refCount: true}),
    );

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }
}
