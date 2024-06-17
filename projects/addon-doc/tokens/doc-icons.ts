import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiDocIcons {
    readonly code: string;
    readonly light: string;
    readonly menu: string;
    readonly dark: string;
    readonly search: string;
}

export const TUI_DOC_DEFAULT_ICONS: TuiDocIcons = {
    search: '@tui.search',
    light: '@tui.sun',
    dark: '@tui.moon',
    code: '@tui.code',
    menu: '@tui.menu',
};

export const TUI_DOC_ICONS = tuiCreateToken(TUI_DOC_DEFAULT_ICONS);

export function tuiDocIconsProvider(icons: Partial<TuiDocIcons>): Provider {
    return tuiProvideOptions(TUI_DOC_ICONS, icons, TUI_DOC_DEFAULT_ICONS);
}
