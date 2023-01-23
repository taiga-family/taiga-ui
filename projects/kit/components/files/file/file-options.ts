import {InjectionToken} from '@angular/core';
import {tuiFormatSize} from '@taiga-ui/kit/utils';

export interface TuiFileOptions {
    readonly formatSize: (
        units: [string, string, string],
        size?: number,
    ) => string | null;
}

export const TUI_FILE_DEFAULT_OPTIONS: TuiFileOptions = {
    formatSize: tuiFormatSize,
};

export const TUI_FILE_OPTIONS = new InjectionToken<TuiFileOptions>(
    `[TUI_FILE_OPTIONS]: Default parameters for file component`,
    {
        factory: () => TUI_FILE_DEFAULT_OPTIONS,
    },
);
