import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiCommonIcons {
    readonly check: string;
    readonly close: string;
    readonly error: string;
    readonly more: string;
}

const COMMON_ICONS: TuiCommonIcons = {
    check: `tuiIconCheck`,
    close: `tuiIconClose`,
    error: `tuiIconAlertCircle`,
    more: `tuiIconChevronRight`,
};

export const TUI_COMMON_ICONS = tuiCreateOptions(COMMON_ICONS);

export function tuiCommonIconsProvider(icons: TuiCommonIcons): Provider {
    return tuiProvideOptions(TUI_COMMON_ICONS, icons, COMMON_ICONS);
}
