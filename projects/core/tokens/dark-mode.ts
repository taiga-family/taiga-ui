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

            // Tracks the last value the effect has seen so its initial run (the value
            // loaded from storage/media) is not written back. Seeding it synchronously
            // avoids relying on the effect flushing before the first user change — that
            // race dropped the first `set()` when storage was empty.
            let previous = String(result());
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
                    const value = String(result());

                    if (value === previous) {
                        return;
                    }

                    previous = value;

                    if (automatic) {
                        automatic = false;
                    } else {
                        storage?.setItem(key, value);
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
