import {DOCUMENT} from '@angular/common';
import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';
import type {Observable} from 'rxjs';
import {EMPTY, from, shareReplay} from 'rxjs';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_FONTS_READY = tuiCreateTokenFromFactory<Observable<unknown>>(() =>
    from((inject(DOCUMENT) as any).fonts?.ready || EMPTY).pipe(
        shareReplay({bufferSize: 1, refCount: false}),
    ),
);
