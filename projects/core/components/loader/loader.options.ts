import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
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
export const [TUI_LOADER_OPTIONS, tuiLoaderOptionsProvider] = tuiCreateOptions(
    TUI_LOADER_DEFAULT_OPTIONS,
);
