import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

const LAYOUT_ICONS: TuiLayoutIcons = {
    filter: '@tui.filter',
    grid: '@tui.layout-grid',
};

/**
 * @deprecated moved to @taiga-ui/beaver, use {@link TuiBeaverIcons} instead
 */
export interface TuiLayoutIcons {
    readonly filter: string;
    readonly grid: string;
}

/**
 * @deprecated moved to @taiga-ui/beaver, use {@link TUI_BEAVER_ICONS} instead
 */
export const TUI_LAYOUT_ICONS = tuiCreateToken(LAYOUT_ICONS);

/**
 * @deprecated moved to @taiga-ui/beaver, use {@link tuiBeaverIconsProvider} instead
 */
export function tuiLayoutIconsProvider(icons: Partial<TuiLayoutIcons>): Provider {
    return tuiProvideOptions(TUI_LAYOUT_ICONS, icons, LAYOUT_ICONS);
}

/**
 * @deprecated moved to @taiga-ui/beaver, use {@link TUI_BEAVER_ICONS} instead
 */
export const TUI_COMMON_ICONS = TUI_LAYOUT_ICONS;

/**
 * @deprecated moved to @taiga-ui/beaver, use {@link tuiBeaverIconsProvider} instead
 */
export const tuiCommonIconsProvider = tuiLayoutIconsProvider;

/**
 * @deprecated moved to @taiga-ui/beaver, use {@link TuiBeaverIcons} instead
 */
export type TuiCommonIcons = TuiLayoutIcons;
