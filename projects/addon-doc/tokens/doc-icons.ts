import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiDocIcons {
    readonly code: string;
    readonly menu: string;
    readonly search: string;
    readonly link: string;
    readonly shrink: string;
    readonly expand: string;
    // TODO: drop optional in v6
    readonly resizer?: string;
}

export const TUI_DOC_DEFAULT_ICONS: TuiDocIcons = {
    search: '@tui.search',
    code: '@tui.code',
    menu: '@tui.menu',
    link: '@tui.link',
    shrink: '@tui.shrink',
    expand: '@tui.expand',
    resizer: '@tui.grip-vertical',
};

export const [TUI_DOC_ICONS, tuiDocIconsProvider] =
    tuiCreateOptions(TUI_DOC_DEFAULT_ICONS);
