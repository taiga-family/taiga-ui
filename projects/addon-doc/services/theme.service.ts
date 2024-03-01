/* eslint-disable no-restricted-syntax,no-restricted-imports */
import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {BehaviorSubject} from 'rxjs';

import {
    TUI_THEME_DEFAULT_NAME,
    TUI_THEME_NAME,
    TUI_THEME_STORAGE_KEY,
} from './theme.options';

@Injectable({
    providedIn: 'root',
})
export class TuiThemeService extends BehaviorSubject<string> {
    constructor(
        @Inject(TUI_THEME_NAME) public readonly initialTheme: string,
        @Inject(TUI_THEME_STORAGE_KEY) public readonly key: string,
        @Inject(LOCAL_STORAGE) private readonly storage: Storage,
    ) {
        super(storage.getItem(key) || initialTheme);
    }

    public get isDefaultTheme(): boolean {
        return this.value === TUI_THEME_DEFAULT_NAME;
    }

    public override next(theme: string): void {
        this.storage.setItem(this.key, theme);
        super.next(theme);
    }
}
