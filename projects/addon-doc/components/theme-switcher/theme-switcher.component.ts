import {
    ChangeDetectionStrategy,
    Component,
    type FactoryProvider,
    inject,
    InjectionToken,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_LOCAL_STORAGE, WA_LOCATION} from '@ng-web-apis/common';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiTextfield} from '@taiga-ui/core/components/textfield';
import {TuiSelect} from '@taiga-ui/kit/components/select';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {DOCUMENT} from '@angular/common';

export const TUI_THEME_KEY = new InjectionToken(ngDevMode ? 'TUI_THEME_KEY' : '', {
    factory: () => 'data-tui-theme',
});

export const TUI_THEME = new InjectionToken(ngDevMode ? 'TUI_THEME' : '', {
    factory: () => 'Taiga UI',
});

export const TUI_THEMES = new InjectionToken<Record<string, string>>(
    ngDevMode ? 'TUI_THEMES' : '',
    {factory: () => ({})},
);

export function tuiDocThemeProvider(): FactoryProvider {
    return {
        provide: TUI_THEME,
        useFactory: () =>
            inject(WA_LOCAL_STORAGE)?.getItem(inject(TUI_THEME_KEY)) || 'Taiga UI',
    };
}

@Component({
    selector: 'tui-doc-theme-switcher',
    imports: [FormsModule, TuiChevron, TuiDataList, TuiSelect, TuiTextfield],
    templateUrl: './theme-switcher.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocThemeSwitcher {
    private readonly storage = inject(WA_LOCAL_STORAGE);
    private readonly key = inject(TUI_THEME_KEY);
    private readonly location = inject(WA_LOCATION);

    protected readonly theme = inject(TUI_THEME);
    protected readonly themes = inject(TUI_THEMES);
    protected readonly keys = Object.keys(this.themes);

    constructor() {
        inject(DOCUMENT).documentElement.setAttribute(this.key, this.theme);
    }

    public onTheme(theme: string): void {
        this.storage?.setItem(this.key, theme);
        this.location.reload();
    }
}
