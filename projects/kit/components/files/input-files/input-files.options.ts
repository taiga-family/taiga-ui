import {InjectionToken, type Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {type TuiSizeL} from '@taiga-ui/core/types';

export interface TuiInputFilesOptions extends TuiAppearanceOptions {
    accept: string;
    maxFileSize: number;
    multiple: boolean;
    size: TuiSizeL;
}

export const TUI_INPUT_FILES_DEFAULT_OPTIONS: TuiInputFilesOptions = {
    appearance: 'file',
    accept: '',
    multiple: false,
    size: 'm',
    maxFileSize: 30 * 1024 * 1024, // 30 MiB
};

/**
 * Default parameters for input files component
 */
export const TUI_INPUT_FILES_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_INPUT_FILES_OPTIONS' : '',
    {
        factory: () => TUI_INPUT_FILES_DEFAULT_OPTIONS,
    },
);

export function tuiInputFilesOptionsProvider(
    options: Partial<TuiInputFilesOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_FILES_OPTIONS,
        options,
        TUI_INPUT_FILES_DEFAULT_OPTIONS,
    );
}
