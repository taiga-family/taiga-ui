import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import {from, NEVER, Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

export const TUI_FONTS_READY = new InjectionToken<Observable<unknown>>(
    `[TUI_FONTS_READY]`,
    {
        factory: () =>
            from((inject(DOCUMENT) as any).fonts?.ready || NEVER).pipe(
                shareReplay({bufferSize: 1, refCount: true}),
            ),
    },
);
