import {inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, WINDOW} from '@ng-web-apis/common';
import {BehaviorSubject} from 'rxjs';

import {
    TUI_THEME_NIGHT_STORAGE_KEY,
    TUI_USE_DEFAULT_NIGHT_THEME,
} from './theme-night.options';

@Injectable({
    providedIn: 'root',
})
export class TuiThemeNightService extends BehaviorSubject<boolean> {
    private readonly storage = inject(LOCAL_STORAGE);
    private readonly key = inject(TUI_THEME_NIGHT_STORAGE_KEY);

    public readonly useDefaultNightTheme = inject(TUI_USE_DEFAULT_NIGHT_THEME);

    constructor() {
        super(
            isDark(
                inject(LOCAL_STORAGE),
                inject(TUI_THEME_NIGHT_STORAGE_KEY),
                inject(WINDOW),
            ),
        );
    }

    public override next(night: boolean): void {
        this.storage.setItem(this.key, String(night));
        super.next(night);
    }

    public toggle(): void {
        this.next(!this.value);
    }
}

function isDark(storage: Storage, key: string, window: Window): boolean {
    return (
        storage[key] === 'true' ||
        (storage[key] === null &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
}
