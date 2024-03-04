import {type Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';

export interface TuiTableOptions {
    readonly direction: -1 | 1;
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
    direction: 1,
    sortIcons: {
        asc: 'tuiIconSortAscending',
        desc: 'tuiIconSortDescending',
        off: 'tuiIconSortOff',
    },
};

export const TUI_TABLE_OPTIONS = tuiCreateToken(TUI_TABLE_DEFAULT_OPTIONS);

export function tuiTableOptionsProvider(options: Partial<TuiTableOptions>): Provider {
    return tuiProvideOptions(TUI_TABLE_OPTIONS, options, TUI_TABLE_DEFAULT_OPTIONS);
}
