import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {BehaviorSubject} from 'rxjs';

import {TUI_THEME_NAME, TUI_THEME_STORAGE_KEY} from './theme.options';

@Injectable({
    providedIn: `root`,
})
export class TuiThemeService extends BehaviorSubject<string> {
    constructor(
        @Inject(TUI_THEME_NAME) readonly name: string,
        @Inject(TUI_THEME_STORAGE_KEY) readonly key: string,
        @Inject(LOCAL_STORAGE) private readonly storage: Storage,
    ) {
        super(storage.getItem(key) || name);
    }

    override next(theme: string): void {
        this.storage.setItem(this.key, theme);
        super.next(theme);
    }

    get isDefaultTheme(): boolean {
        return this.value === this.name;
    }
}
