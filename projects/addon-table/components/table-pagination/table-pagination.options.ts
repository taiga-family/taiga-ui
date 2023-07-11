import {Provider} from '@angular/core';
import {TuiContextWithImplicit,tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiTablePaginationOptions {
    readonly sizeOptionContent: PolymorpheusContent<
        TuiContextWithImplicit<number> & {total: number}
    >;
    readonly showPages: boolean;
    readonly items: readonly number[];
    readonly size: number;
}

function defaultSizeOptionContent({$implicit}: TuiContextWithImplicit<number>): string {
    return `${$implicit}`;
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
export const TUI_TABLE_PAGINATION_OPTIONS = tuiCreateOptions(
    TUI_TABLE_PAGINATION_DEFAULT_OPTIONS,
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
