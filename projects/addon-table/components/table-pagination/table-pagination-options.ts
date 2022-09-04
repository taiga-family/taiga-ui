import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiTablePaginationOptions {
    readonly sizeOptionContent: PolymorpheusContent<
        TuiContextWithImplicit<number> & {total: number}
    >;
    readonly showPages: boolean;
}

function defaultSizeOptionContent({$implicit}: TuiContextWithImplicit<number>): string {
    return `${$implicit}`;
}

export const TUI_TABLE_PAGINATION_DEFAULT_OPTIONS: TuiTablePaginationOptions = {
    sizeOptionContent: defaultSizeOptionContent,
    showPages: true,
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
