import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

const COMMON_ICONS: TuiCommonIcons = {
    filter: '@tui.filter',
};

export interface TuiCommonIcons {
    readonly filter: string;
}

export const TUI_COMMON_ICONS = tuiCreateToken(COMMON_ICONS);

export function tuiCommonIconsProvider(icons: Partial<TuiCommonIcons>): Provider {
    return tuiProvideOptions(TUI_COMMON_ICONS, icons, COMMON_ICONS);
}
