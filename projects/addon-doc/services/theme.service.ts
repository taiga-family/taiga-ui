import {inject, Injectable} from '@angular/core';
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
    private readonly storage = inject(LOCAL_STORAGE);
    private readonly key = inject(TUI_THEME_STORAGE_KEY);

    constructor() {
        super(
            inject(LOCAL_STORAGE).getItem(inject(TUI_THEME_STORAGE_KEY)) ||
                inject(TUI_THEME_NAME),
        );
    }

    public get isDefaultTheme(): boolean {
        return this.value === TUI_THEME_DEFAULT_NAME;
    }

    public override next(theme: string): void {
        this.storage.setItem(this.key, theme);
        super.next(theme);
    }
}
