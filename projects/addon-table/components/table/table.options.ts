import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

export interface TuiTableOptions {
    readonly sticky: boolean;
    readonly resizable: boolean;
    readonly open: boolean;
    readonly size: TuiSizeL | TuiSizeS;
    readonly direction: -1 | 1;
    readonly sortIcons: {
        readonly asc: string;
        readonly desc: string;
        readonly off: string;
    };
}

export const TUI_TABLE_DEFAULT_OPTIONS: TuiTableOptions = {
    sticky: false,
    resizable: false,
    open: true,
    size: `m`,
    direction: 1,
    sortIcons: {
        asc: `tuiIconSortAscending`,
        desc: `tuiIconSortDescending`,
        off: `tuiIconSortOff`,
    },
};

export const TUI_TABLE_OPTIONS = tuiCreateOptions(TUI_TABLE_DEFAULT_OPTIONS);

export function tuiTableOptionsProvider(options: Partial<TuiTableOptions>): Provider {
    return tuiProvideOptions(TUI_TABLE_OPTIONS, options, TUI_TABLE_DEFAULT_OPTIONS);
}
