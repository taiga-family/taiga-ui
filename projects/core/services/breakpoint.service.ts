import {Inject, Injectable, NgZone} from '@angular/core';
import {TUI_WINDOW_SIZE, tuiZoneOptimized} from '@taiga-ui/cdk';
import {TuiMedia} from '@taiga-ui/core/interfaces';
import {TUI_MEDIA} from '@taiga-ui/core/tokens';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, shareReplay} from 'rxjs/operators';

export type TuiBreakpointMediaKey = keyof Omit<TuiMedia, 'tablet'>;

/**
 * Service to provide the current breakpoint based on Taiga UI's media queries
 */
@Injectable({
    providedIn: `root`,
})
export class TuiBreakpointService extends Observable<TuiBreakpointMediaKey | null> {
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

    private readonly stream$ = this.size$.pipe(
        map(({width}) => this.sorted.find(size => size > width)),
        map(key => this.invert[key || this.sorted[this.sorted.length - 1]]),
        distinctUntilChanged(),
        tuiZoneOptimized(this.ngZone),
        shareReplay({bufferSize: 1, refCount: true}),
    );

    constructor(
        @Inject(TUI_MEDIA) private readonly media: TuiMedia,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(TUI_WINDOW_SIZE) private readonly size$: Observable<ClientRect>,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }
}
