import {tuiCreateToken} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiSpinIcons {
    readonly decrement: PolymorpheusContent;
    readonly increment: PolymorpheusContent;
}

export const TUI_SPIN_ICONS = tuiCreateToken<TuiSpinIcons>({
    decrement: 'tuiIconChevronLeft',
    increment: 'tuiIconChevronRight',
});
