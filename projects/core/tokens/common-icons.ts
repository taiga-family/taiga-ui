import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

// TODO: Rename `ellipsis` to `more` in the next major version
const COMMON_ICONS: TuiCommonIcons = {
    check: '@tui.check',
    close: '@tui.x',
    error: '@tui.circle-alert',
    more: '@tui.chevron-right',
    search: '@tui.search',
    ellipsis: '@tui.ellipsis',
};

export interface TuiCommonIcons {
    readonly check: string;
    readonly close: string;
    readonly error: string;
    readonly more: string;
    readonly search: string;
    readonly ellipsis: string;
}

export const [TUI_COMMON_ICONS, tuiCommonIconsProvider] = tuiCreateOptions(COMMON_ICONS);
