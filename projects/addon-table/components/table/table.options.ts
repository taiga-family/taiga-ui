import {InjectionToken, type Provider} from '@angular/core';
import {type TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

export const TuiSortDirection = {
    Asc: 1,
    Desc: -1,
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TuiSortDirection = (typeof TuiSortDirection)[keyof typeof TuiSortDirection];

export interface TuiSortChange<T> {
    /**
     * @deprecated use sortKey
     */
    sortBy: keyof T | null;
    sortKey: keyof T | null;
    /**
     * @deprecated use sortDirection
     */
    orderBy: TuiSortDirection;
    sortDirection: TuiSortDirection;
}

export interface TuiTableSortChange<T> {
    /**
     * @deprecated use sortComparator
     */
    sortBy: TuiComparator<T> | null;
    sortComparator: TuiComparator<T> | null;
    /**
     * @deprecated use sortDirection
     */
    orderBy: TuiSortDirection;
    sortDirection: TuiSortDirection;
}

export interface TuiTableOptions {
    readonly direction: TuiSortDirection;
    readonly requiredSort: boolean;
    readonly open: boolean;
    readonly resizable: boolean;
    readonly size: TuiSizeL | TuiSizeS;
    readonly sortIcons: {
        readonly asc: string;
        readonly desc: string;
        readonly off: string;
    };
    readonly sticky: boolean;
}

export const TUI_TABLE_DEFAULT_OPTIONS: TuiTableOptions = {
    sticky: false,
    resizable: false,
    open: true,
    size: 'm',
    direction: TuiSortDirection.Asc,
    requiredSort: false,
    sortIcons: {
        asc: '@tui.chevron-up',
        desc: '@tui.chevron-down',
        off: '@tui.chevrons-up-down',
    },
};

export const TUI_TABLE_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_TABLE_OPTIONS' : '',
    {
        factory: () => TUI_TABLE_DEFAULT_OPTIONS,
    },
);

export function tuiTableOptionsProvider(options: Partial<TuiTableOptions>): Provider {
    return tuiProvideOptions(TUI_TABLE_OPTIONS, options, TUI_TABLE_DEFAULT_OPTIONS);
}
