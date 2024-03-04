import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import {EMPTY, from, type Observable, shareReplay} from 'rxjs';

export const TUI_FONTS_READY = new InjectionToken<Observable<unknown>>(
    '[TUI_FONTS_READY]',
    {
        factory: () =>
            from((inject(DOCUMENT) as any).fonts?.ready || EMPTY).pipe(
                shareReplay({bufferSize: 1, refCount: false}),
            ),
    },
);
