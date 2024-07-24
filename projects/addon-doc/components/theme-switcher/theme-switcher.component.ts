import {NgForOf} from '@angular/common';
import type {FactoryProvider} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_LOCAL_STORAGE, WA_LOCATION} from '@ng-web-apis/common';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TUI_THEME} from '@taiga-ui/core/tokens';
import {TuiSelectModule} from '@taiga-ui/legacy/components/select';

export const TUI_THEME_KEY = tuiCreateToken('data-tui-theme');
export const TUI_THEMES = tuiCreateToken<Record<string, string>>({});

export function tuiDocThemeProvider(): FactoryProvider {
    return {
        provide: TUI_THEME,
        useFactory: () =>
            inject(WA_LOCAL_STORAGE).getItem(inject(TUI_THEME_KEY)) || 'Taiga UI',
    };
}

@Component({
    standalone: true,
    selector: 'tui-doc-theme-switcher',
    imports: [NgForOf, FormsModule, TuiDataList, TuiSelectModule],
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

    public onTheme(theme: string): void {
        this.storage.setItem(this.key, theme);
        this.location.reload();
    }
}
