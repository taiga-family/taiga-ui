import {type Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiDocIcons {
    readonly code: string;
    readonly day: string;
    readonly menu: string;
    readonly night: string;
    readonly search: string;
}

export const TUI_DOC_DEFAULT_ICONS: TuiDocIcons = {
    search: 'tuiIconSearch',
    day: 'tuiIconSun',
    night: 'tuiIconMoon',
    code: 'tuiIconCode',
    menu: 'tuiIconMenuLarge',
};

export const TUI_DOC_ICONS = tuiCreateToken(TUI_DOC_DEFAULT_ICONS);

export function tuiDocIconsProvider(icons: Partial<TuiDocIcons>): Provider {
    return tuiProvideOptions(TUI_DOC_ICONS, icons, TUI_DOC_DEFAULT_ICONS);
}
