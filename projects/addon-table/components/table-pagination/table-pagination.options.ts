import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

function defaultSizeOptionContent({$implicit}: TuiContext<number>): string {
    return `${$implicit}`;
}

export interface TuiTablePaginationOptions {
    readonly items: readonly number[];
    readonly showPages: boolean;
    readonly size: number;
    readonly sizeOptionContent: PolymorpheusContent<TuiContext<number> & {total: number}>;
}

export const TUI_TABLE_PAGINATION_DEFAULT_OPTIONS: TuiTablePaginationOptions = {
    sizeOptionContent: defaultSizeOptionContent,
    showPages: true,
    items: [10, 20, 50, 100],
    size: 10,
};

/**
 * Default parameters for TablePagination component
 */
export const [TUI_TABLE_PAGINATION_OPTIONS, tuiTablePaginationOptionsProvider] =
    tuiCreateOptions(TUI_TABLE_PAGINATION_DEFAULT_OPTIONS);
