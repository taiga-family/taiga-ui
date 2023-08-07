import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiDocIcons {
    readonly search: string;
    readonly day: string;
    readonly night: string;
    readonly code: string;
    readonly menu: string;
}

export const TUI_DOC_DEFAULT_ICONS: TuiDocIcons = {
    search: `tuiIconSearch`,
    day: `tuiIconSun`,
    night: `tuiIconMoon`,
    code: `tuiIconCode`,
    menu: `tuiIconMenuLarge`,
};

export const TUI_DOC_ICONS = tuiCreateOptions(TUI_DOC_DEFAULT_ICONS);

export function tuiDocIconsProvider(icons: Partial<TuiDocIcons>): Provider {
    return tuiProvideOptions(TUI_DOC_ICONS, icons, TUI_DOC_DEFAULT_ICONS);
}
