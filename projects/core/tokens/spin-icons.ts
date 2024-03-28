import {tuiCreateToken} from '@taiga-ui/cdk';

export interface TuiSpinIcons {
    readonly decrement: string;
    readonly increment: string;
}

export const TUI_SPIN_ICONS = tuiCreateToken<TuiSpinIcons>({
    decrement: 'tuiIconChevronLeft',
    increment: 'tuiIconChevronRight',
});
