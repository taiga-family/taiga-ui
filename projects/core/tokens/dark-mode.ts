import {
    effect,
    inject,
    InjectionToken,
    signal,
    untracked,
    type WritableSignal,
} from '@angular/core';
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

            // Seeded synchronously so the effect's initial run is skipped without
            // racing the first user `set()` (which dropped it on empty storage).
            let previous = result();
            // A machine-driven change (system theme / reset) that should not persist.
            let automatic = false;

            const auto = (value: boolean): void => {
                if (result() !== value) {
                    automatic = true;
                    result.set(value);
                }
            };

            fromEvent(media, 'change')
                .pipe(
                    filter(() => !storage?.getItem(key)),
                    takeUntilDestroyed(),
                )
                .subscribe(() => auto(media.matches));

            untracked(() => {
                effect(() => {
                    const value = result();

                    if (value === previous) {
                        return;
                    }

                    previous = value;

                    if (automatic) {
                        automatic = false;
                    } else {
                        storage?.setItem(key, String(value));
                    }
                });
            });

            return Object.assign(result, {
                reset: () => {
                    storage?.removeItem(key);
                    auto(media.matches);
                },
            });
        },
    },
);
