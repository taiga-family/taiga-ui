import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core/types';

export interface TuiLoaderOptions {
    readonly inheritColor: boolean;
    readonly overlay: boolean;
    readonly size: TuiSizeXS | TuiSizeXXL;
}

/** Default values for the loader options. */
export const TUI_LOADER_DEFAULT_OPTIONS: TuiLoaderOptions = {
    inheritColor: false,
    overlay: false,
    size: `m`,
};

/**
 * Default parameters for loader component
 */
export const TUI_LOADER_OPTIONS = tuiCreateToken(TUI_LOADER_DEFAULT_OPTIONS);

export function tuiLoaderOptionsProvider(options: Partial<TuiLoaderOptions>): Provider {
    return tuiProvideOptions(TUI_LOADER_OPTIONS, options, TUI_LOADER_DEFAULT_OPTIONS);
}
