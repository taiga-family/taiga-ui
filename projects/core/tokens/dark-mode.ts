import {inject, InjectionToken, signal, type WritableSignal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_LOCAL_STORAGE, WA_WINDOW} from '@ng-web-apis/common';
import {filter, fromEvent} from 'rxjs';

export const TUI_DARK_MODE_DEFAULT_KEY = 'tuiDark';

export const TUI_DARK_MODE_KEY = new InjectionToken(
    ngDevMode ? 'TUI_DARK_MODE_KEY' : '',
    {factory: () => TUI_DARK_MODE_DEFAULT_KEY},
);

export const TUI_DARK_MODE = new InjectionToken<
    WritableSignal<boolean> & {reset(): void}
>(ngDevMode ? 'TUI_DARK_MODE' : '', {
    factory: () => {
        const storage = inject(WA_LOCAL_STORAGE);
        const key = inject(TUI_DARK_MODE_KEY);
        const saved = storage?.getItem(key);
        const media = inject(WA_WINDOW).matchMedia('(prefers-color-scheme: dark)');
        const result = signal(saved ? saved === 'true' : media.matches);
        // Raw setter that does not persist — used for machine-driven changes.
        const set = result.set.bind(result);

        // Persist an explicit choice and pin it, even when the value is
        // unchanged (e.g. picking dark while the system is already dark).
        const pin = (value: boolean): void => {
            storage?.setItem(key, String(value));
            set(value);
        };

        // Follow the system theme while it has not been pinned (storage empty).
        fromEvent(media, 'change')
            .pipe(
                filter(() => !storage?.getItem(key)),
                takeUntilDestroyed(),
            )
            .subscribe(() => set(media.matches));

        return Object.assign(result, {
            set: pin,
            update: (updater: (value: boolean) => boolean) => pin(updater(result())),
            reset: () => {
                storage?.removeItem(key);
                set(media.matches);
            },
        });
    },
});
