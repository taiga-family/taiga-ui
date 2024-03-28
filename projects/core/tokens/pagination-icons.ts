import {tuiCreateToken} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiPaginationIcons {
    readonly firstPage: PolymorpheusContent;
    readonly previousPage: PolymorpheusContent;
    readonly nextPage: PolymorpheusContent;
    readonly lastPage: PolymorpheusContent;
}

export const TUI_PAGINATION_ICONS = tuiCreateToken<TuiPaginationIcons>({
    firstPage: 'tuiIconChevronsLeft',
    previousPage: 'tuiIconChevronLeft',
    nextPage: 'tuiIconChevronRight',
    lastPage: 'tuiIconChevronsRight',
});
