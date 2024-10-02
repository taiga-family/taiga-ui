import {inject, Injectable} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {tuiCreateTokenFromFactory, tuiInjectDocElement} from '@taiga-ui/cdk/utils';

export const TUI_THEME_COLOR = tuiCreateTokenFromFactory<string>(
    () => inject(Meta).getTag('name="theme-color"')?.content ?? '',
);

interface TuiThemeColor {
    get color(): string;
    set color(value: string);
}

@Injectable({
    providedIn: 'root',
})
export class TuiThemeColorService implements TuiThemeColor {
    private readonly documentElement = tuiInjectDocElement();
    private readonly current = inject(TUI_THEME_COLOR);
    private readonly meta = inject(Meta);

    public get color(): string {
        return this.current;
    }

    public set color(content: string) {
        this.meta.updateTag({name: 'theme-color', content});
        this.documentElement.style.setProperty('--tui-theme-color', content);
    }
}
