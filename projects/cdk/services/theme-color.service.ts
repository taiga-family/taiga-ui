import {DOCUMENT} from '@angular/common';
import {inject, Injectable, InjectionToken} from '@angular/core';
import {Meta} from '@angular/platform-browser';

export const TUI_THEME_COLOR = new InjectionToken<string>(
    ngDevMode ? 'TUI_THEME_COLOR' : '',
    {
        factory: () => inject(Meta).getTag('name="theme-color"')?.content ?? '',
    },
);

interface TuiThemeColor {
    get color(): string;
    set color(value: string);
}

@Injectable({
    providedIn: 'root',
})
export class TuiThemeColorService implements TuiThemeColor {
    private current = inject(TUI_THEME_COLOR);
    private readonly doc = inject(DOCUMENT);
    private readonly meta = inject(Meta);

    constructor() {
        this.color = this.current;
    }

    public get color(): string {
        return this.current;
    }

    public set color(content: string) {
        this.current = content;
        this.meta.updateTag({name: 'theme-color', content});
        this.doc.documentElement.style.setProperty('--tui-theme-color', content);
    }
}
