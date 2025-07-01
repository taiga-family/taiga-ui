import type {Provider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

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
export const TUI_TABLE_PAGINATION_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_TABLE_PAGINATION_OPTIONS' : '',
    {
        factory: () => TUI_TABLE_PAGINATION_DEFAULT_OPTIONS,
    },
);

export function tuiTablePaginationOptionsProvider(
    options: Partial<TuiTablePaginationOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_TABLE_PAGINATION_OPTIONS,
        options,
        TUI_TABLE_PAGINATION_DEFAULT_OPTIONS,
    );
}
