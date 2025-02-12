import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export const TuiSortDirection = {
    Asc: 1,
    Desc: -1,
} as const;
export type TuiSortDirection = (typeof TuiSortDirection)[keyof typeof TuiSortDirection];

export interface TuiSortAndOrder<T> {
    sortBy: keyof T | null;
    orderBy: -1 | 1;
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

export const TUI_TABLE_OPTIONS = tuiCreateToken(TUI_TABLE_DEFAULT_OPTIONS);

export function tuiTableOptionsProvider(options: Partial<TuiTableOptions>): Provider {
    return tuiProvideOptions(TUI_TABLE_OPTIONS, options, TUI_TABLE_DEFAULT_OPTIONS);
}
