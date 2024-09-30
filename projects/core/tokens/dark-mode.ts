import type {WritableSignal} from '@angular/core';
import {effect, inject, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_LOCAL_STORAGE, WA_WINDOW} from '@ng-web-apis/common';
import {
    tuiCreateToken,
    tuiCreateTokenFromFactory,
} from '@taiga-ui/cdk/utils/miscellaneous';
import {filter, fromEvent} from 'rxjs';

export const TUI_DARK_MODE_DEFAULT_KEY = 'tuiDark';
export const TUI_DARK_MODE_KEY = tuiCreateToken(TUI_DARK_MODE_DEFAULT_KEY);
export const TUI_DARK_MODE = tuiCreateTokenFromFactory<
    WritableSignal<boolean> & {reset(): void}
>(() => {
    let automatic = true;

    const storage = inject(WA_LOCAL_STORAGE);
    const key = inject(TUI_DARK_MODE_KEY);
    const saved = storage.getItem(key);
    const media = inject(WA_WINDOW).matchMedia('(prefers-color-scheme: dark)');
    const result = signal(Boolean((saved && JSON.parse(saved)) ?? media.matches));

    fromEvent(media, 'change')
        .pipe(
            filter(() => !storage.getItem(key)),
            takeUntilDestroyed(),
        )
        .subscribe(() => {
            automatic = true;
            result.set(media.matches);
        });

    effect(() => {
        const value = String(result());

        if (automatic) {
            automatic = false;
        } else {
            storage.setItem(key, value);
        }
    });

    return Object.assign(result, {
        reset: () => {
            storage.removeItem(key);
            automatic = true;
            result.set(media.matches);
        },
    });
});
