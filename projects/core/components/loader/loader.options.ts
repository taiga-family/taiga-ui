import {InjectionToken, type Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiSizeXS, type TuiSizeXXL} from '@taiga-ui/core/types';

export interface TuiLoaderOptions {
    readonly inheritColor: boolean;
    readonly overlay: boolean;
    readonly size: TuiSizeXS | TuiSizeXXL;
}

/** Default values for the loader options. */
export const TUI_LOADER_DEFAULT_OPTIONS: TuiLoaderOptions = {
    size: 'm',
    inheritColor: false,
    overlay: false,
};

/**
 * Default parameters for loader component
 */
export const TUI_LOADER_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_LOADER_OPTIONS' : '',
    {
        factory: () => TUI_LOADER_DEFAULT_OPTIONS,
    },
);

export function tuiLoaderOptionsProvider(options: Partial<TuiLoaderOptions>): Provider {
    return tuiProvideOptions(TUI_LOADER_OPTIONS, options, TUI_LOADER_DEFAULT_OPTIONS);
}
