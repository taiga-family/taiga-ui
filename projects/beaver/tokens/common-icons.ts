import {tuiCreateOptions} from '@taiga-ui/cdk';

export interface TuiBeaverIcons {
    readonly filter: string;
    readonly grid: string;
}

export const [TUI_BEAVER_ICONS, tuiBeaverIconsProvider] =
    tuiCreateOptions<TuiBeaverIcons>({
        filter: '@tui.filter',
        grid: '@tui.layout-grid',
    });
