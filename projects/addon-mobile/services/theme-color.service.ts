import {DOCUMENT} from '@angular/common';
import {inject, Injectable, InjectionToken} from '@angular/core';
import {Meta} from '@angular/platform-browser';

export const TUI_THEME_COLOR = new InjectionToken<string>(
    ngDevMode ? 'TUI_THEME_COLOR' : '',
    {factory: () => inject(Meta).getTag('name="theme-color"')?.content ?? ''},
);

interface TuiThemeColor {
    get color(): string;
    set color(value: string);
}

@Injectable({providedIn: 'root'})
export class TuiThemeColorService implements TuiThemeColor {
    private current = inject(TUI_THEME_COLOR);
    private readonly doc = inject(DOCUMENT);
    private readonly meta = inject(Meta);

    constructor() {
        this.color = this.current;
    }

    /**
     * Address-bar color — the `<meta name="theme-color">` tag.
     */
    public get color(): string {
        return this.current;
    }

    public set color(content: string) {
        this.current = content;
        this.meta.updateTag({name: 'theme-color', content});
    }

    /**
     * Navigation-chrome color — the `--tui-theme-color` CSS variable on `<html>`,
     * consumed by `tuiNavigationHeader` / `tuiNavigationAside` / drawer.
     *
     * Kept separate from {@link color} so that changing only the address bar
     * (e.g. a sheet dialog dimming it to match its backdrop) no longer repaints
     * the navigation chrome — the inline write has higher specificity than any
     * `:root` declaration and previously caused a one-frame flicker.
     */
    public set navColor(content: string) {
        this.doc.documentElement.style.setProperty('--tui-theme-color', content);
    }
}
