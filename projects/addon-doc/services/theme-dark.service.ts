import {inject, Injectable} from '@angular/core';
import {WA_LOCAL_STORAGE, WA_WINDOW} from '@ng-web-apis/common';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DARK_MODE_DEFAULT_KEY, TUI_DARK_MODE_KEY} from '@taiga-ui/core/tokens';
import {BehaviorSubject} from 'rxjs';

/**
 * @deprecated use {@link TUI_DARK_THEME} instead
 */
export const TUI_DARK_THEME_DEFAULT_KEY = TUI_DARK_MODE_DEFAULT_KEY;

/**
 * @deprecated use {@link TUI_DARK_THEME} instead
 */
export const TUI_DARK_THEME_KEY = TUI_DARK_MODE_KEY;

/**
 * @deprecated use {@link TUI_DARK_THEME} instead
 */
export const TUI_DARK_THEME = tuiCreateToken(false);

/**
 * @deprecated use {@link TUI_DARK_THEME} instead
 */
@Injectable({
    providedIn: 'root',
})
export class TuiDocThemeDarkService extends BehaviorSubject<boolean> {
    private readonly storage = inject(WA_LOCAL_STORAGE);
    private readonly key = inject(TUI_DARK_THEME_KEY);

    constructor() {
        super(
            isDark(
                inject(WA_LOCAL_STORAGE),
                inject(TUI_DARK_THEME_KEY),
                inject(WA_WINDOW),
            ),
        );
    }

    public override next(dark: boolean): void {
        this.storage?.setItem(this.key, String(dark));
        super.next(dark);
    }

    public toggle(): void {
        this.next(!this.value);
    }
}

function isDark(storage: Storage | null, key: string, window: Window): boolean {
    const fallback =
        window.matchMedia('(prefers-color-scheme: dark)').matches ||
        inject(TUI_DARK_THEME);

    return (
        storage?.getItem(key) === 'true' || (storage?.getItem(key) === null && fallback)
    );
}
