import {tuiCreateToken} from '@taiga-ui/cdk';

export interface TuiPaginationIcons {
    readonly firstPage: string;
    readonly previousPage: string;
    readonly nextPage: string;
    readonly lastPage: string;
}

export const TUI_PAGINATION_ICONS = tuiCreateToken<TuiPaginationIcons>({
    firstPage: 'tuiIconChevronsLeft',
    previousPage: 'tuiIconChevronLeft',
    nextPage: 'tuiIconChevronRight',
    lastPage: 'tuiIconChevronsRight',
});
