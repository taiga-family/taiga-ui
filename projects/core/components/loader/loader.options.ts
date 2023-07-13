import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core/types';

export interface TuiLoaderOptions {
    readonly size: TuiSizeXS | TuiSizeXXL;
    readonly inheritColor: boolean;
    readonly overlay: boolean;
}

/** Default values for the loader options. */
export const TUI_LOADER_DEFAULT_OPTIONS: TuiLoaderOptions = {
    size: `m`,
    inheritColor: false,
    overlay: false,
};

/**
 * Default parameters for loader component
 */
export const TUI_LOADER_OPTIONS = tuiCreateOptions(TUI_LOADER_DEFAULT_OPTIONS);

export function tuiLoaderOptionsProvider(options: Partial<TuiLoaderOptions>): Provider {
    return tuiProvideOptions(TUI_LOADER_OPTIONS, options, TUI_LOADER_DEFAULT_OPTIONS);
}
