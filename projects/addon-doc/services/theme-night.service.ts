/* eslint-disable no-restricted-syntax,no-restricted-imports */
import {Inject, Injectable} from '@angular/core';
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
    constructor(
        @Inject(WINDOW) public readonly win: Window,
        @Inject(LOCAL_STORAGE) public readonly storage: Storage,
        @Inject(TUI_THEME_NIGHT_STORAGE_KEY) public readonly key: string,
        @Inject(TUI_USE_DEFAULT_NIGHT_THEME)
        public readonly useDefaultNightTheme: boolean,
    ) {
        super(
            storage.getItem(key) === 'true' ||
                (storage.getItem(key) === null &&
                    win.matchMedia('(prefers-color-scheme: dark)').matches),
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
