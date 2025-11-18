import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

const LAYOUT_ICONS: TuiLayoutIcons = {
    filter: '@tui.filter',
    grid: '@tui.layout-grid',
};

export interface TuiLayoutIcons {
    readonly filter: string;
    readonly grid: string;
}

export const [TUI_LAYOUT_ICONS, tuiLayoutIconsProvider] = tuiCreateOptions(LAYOUT_ICONS);

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
