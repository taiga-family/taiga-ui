import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiSpinIcons {
    readonly decrement: string;
    readonly increment: string;
}

export const TUI_SPIN_ICONS = tuiCreateToken<TuiSpinIcons>({
    decrement: '@tui.chevron-left',
    increment: '@tui.chevron-right',
});
