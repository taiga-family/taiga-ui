import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

const COMMON_ICONS: TuiCommonIcons = {
    check: 'tuiIconCheck',
    close: 'tuiIconClose',
    error: 'tuiIconAlertCircle',
    more: 'tuiIconChevronRight',
};

export interface TuiCommonIcons {
    readonly check: string;
    readonly close: string;
    readonly error: string;
    readonly more: string;
}

export const TUI_COMMON_ICONS = tuiCreateToken(COMMON_ICONS);

export function tuiCommonIconsProvider(icons: Partial<TuiCommonIcons>): Provider {
    return tuiProvideOptions(TUI_COMMON_ICONS, icons, COMMON_ICONS);
}
