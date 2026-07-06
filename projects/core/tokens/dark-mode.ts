import {inject, InjectionToken, signal, type WritableSignal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_LOCAL_STORAGE, WA_WINDOW} from '@ng-web-apis/common';
import {filter, fromEvent} from 'rxjs';

export const TUI_DARK_MODE_DEFAULT_KEY = 'tuiDark';

export const TUI_DARK_MODE_KEY = new InjectionToken(
    ngDevMode ? 'TUI_DARK_MODE_KEY' : '',
    {factory: () => TUI_DARK_MODE_DEFAULT_KEY},
);

export type TuiDarkMode = WritableSignal<boolean> & {reset(): void};

export const TUI_DARK_MODE = new InjectionToken<TuiDarkMode>(
    ngDevMode ? 'TUI_DARK_MODE' : '',
    {
        factory: () => {
            const storage = inject(WA_LOCAL_STORAGE);
            const key = inject(TUI_DARK_MODE_KEY);
            const saved = storage?.getItem(key);
            const media = inject(WA_WINDOW).matchMedia('(prefers-color-scheme: dark)');
            const result = signal(Boolean((saved && JSON.parse(saved)) ?? media.matches));
            // Raw setter that does not persist — used for machine-driven changes.
            const set = result.set.bind(result);

            // Follow the system theme while it has not been pinned (storage empty).
            fromEvent(media, 'change')
                .pipe(
                    filter(() => !storage?.getItem(key)),
                    takeUntilDestroyed(),
                )
                .subscribe(() => set(media.matches));

            return Object.assign(result, {
                // Explicit choice: always pin, even when the value is unchanged
                // (e.g. picking dark while the system is already dark).
                set: (value: boolean) => {
                    storage?.setItem(key, String(value));
                    set(value);
                },
                reset: () => {
                    storage?.removeItem(key);
                    set(media.matches);
                },
            });
        },
    },
);
