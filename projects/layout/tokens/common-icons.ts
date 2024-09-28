import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

const LAYOUT_ICONS: TuiLayoutIcons = {
    filter: '@tui.filter',
    grid: '@tui.layout-grid',
};

export interface TuiLayoutIcons {
    readonly filter: string;
    readonly grid: string;
}

export const TUI_LAYOUT_ICONS = tuiCreateToken(LAYOUT_ICONS);

export function tuiLayoutIconsProvider(icons: Partial<TuiLayoutIcons>): Provider {
    return tuiProvideOptions(TUI_LAYOUT_ICONS, icons, LAYOUT_ICONS);
}

/**
 * @deprecated use {@link TUI_LAYOUT_ICONS} instead
 */
export const TUI_COMMON_ICONS = TUI_LAYOUT_ICONS;

/**
 * @deprecated use {@link tuiLayoutIconsProvider} instead
 */
export const tuiCommonIconsProvider = tuiLayoutIconsProvider;

/**
 * @deprecated use {@link TuiLayoutIcons} instead
 */
export type TuiCommonIcons = TuiLayoutIcons;
