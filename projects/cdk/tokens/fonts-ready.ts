import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import {EMPTY, from, Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

export const TUI_FONTS_READY = new InjectionToken<Observable<unknown>>(
    `[TUI_FONTS_READY]`,
    {
        factory: () =>
            from((inject(DOCUMENT) as any).fonts?.ready || EMPTY).pipe(
                shareReplay({bufferSize: 1, refCount: false}),
            ),
    },
);
