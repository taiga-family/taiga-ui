import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, WINDOW} from '@ng-web-apis/common';
import {BehaviorSubject} from 'rxjs';

import {
    TUI_THEME_NIGHT_STORAGE_KEY,
    TUI_USE_DEFAULT_NIGHT_THEME,
} from './theme-night.options';

@Injectable({
    providedIn: `root`,
})
export class TuiThemeNightService extends BehaviorSubject<boolean> {
    constructor(
        @Inject(WINDOW) readonly windowRef: Window,
        @Inject(LOCAL_STORAGE) readonly storage: Storage,
        @Inject(TUI_THEME_NIGHT_STORAGE_KEY) readonly key: string,
        @Inject(TUI_USE_DEFAULT_NIGHT_THEME) readonly useDefaultNightTheme: boolean,
    ) {
        super(
            storage.getItem(key) === `true` ||
                (storage.getItem(key) === null &&
                    windowRef.matchMedia(`(prefers-color-scheme: dark)`).matches),
        );
    }

    override next(night: boolean): void {
        this.storage.setItem(this.key, String(night));
        super.next(night);
    }

    toggle(): void {
        this.next(!this.value);
    }
}
