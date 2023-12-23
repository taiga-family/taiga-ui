import {inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiMedia} from '@taiga-ui/core/interfaces';
import {TUI_MEDIA} from '@taiga-ui/core/tokens';
import {tuiMedia} from '@taiga-ui/core/utils';
import {distinctUntilChanged, filter, map, merge, Observable, shareReplay} from 'rxjs';

export type TuiBreakpointMediaKey = keyof Omit<TuiMedia, 'tablet'>;

/**
 * Service to provide the current breakpoint based on Taiga UI's media queries
 */
@Injectable({providedIn: 'root'})
export class TuiBreakpointService extends Observable<TuiBreakpointMediaKey | null> {
    private readonly media = inject(TUI_MEDIA);
    private readonly win = inject(WINDOW);

    constructor() {
        super(subscriber => {
            const {mobile, desktopSmall} = this.media;

            return merge(
                tuiMedia(`(max-width: ${mobile - 1}px)`, this.win).pipe(
                    filter(Boolean),
                    map(() => 'mobile' as const),
                ),
                tuiMedia(
                    `(min-width: ${mobile}px) and (max-width: ${desktopSmall - 1}px)`,
                    this.win,
                ).pipe(
                    filter(Boolean),
                    map(() => 'desktopSmall' as const),
                ),
                tuiMedia(`(min-width: ${desktopSmall}px)`, this.win).pipe(
                    filter(Boolean),
                    map(() => 'desktopLarge' as const),
                ),
            )
                .pipe(
                    distinctUntilChanged(),
                    shareReplay({bufferSize: 1, refCount: true}),
                )
                .subscribe(subscriber);
        });
    }
}
