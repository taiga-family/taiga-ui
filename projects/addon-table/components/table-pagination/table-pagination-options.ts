import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiTablePaginationOptions {
    readonly sizeOptionContent: PolymorpheusContent<
        TuiContextWithImplicit<number> & {total: number}
    >;
}

function defaultSizeOptionContent({$implicit}: TuiContextWithImplicit<number>): string {
    return `${$implicit}`;
}

export const TUI_TABLE_PAGINATION_DEFAULT_OPTIONS: TuiTablePaginationOptions = {
    sizeOptionContent: defaultSizeOptionContent,
};

export const TUI_TABLE_PAGINATION_OPTIONS = new InjectionToken(
    `Default parameters for TablePagination component`,
    {factory: () => TUI_TABLE_PAGINATION_DEFAULT_OPTIONS},
);

export function tuiTablePaginationOptionsProvider(
    options: Partial<TuiTablePaginationOptions>,
): ValueProvider {
    return {
        provide: TUI_TABLE_PAGINATION_OPTIONS,
        useValue: {...TUI_TABLE_PAGINATION_DEFAULT_OPTIONS, ...options},
    };
}
