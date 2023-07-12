import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit/types';

export interface TuiTagOptions {
    readonly size: TuiSizeL | TuiSizeS;
    readonly status: TuiStatus;
    readonly autoColor: boolean;
}

/** Default values for the tag options. */
export const TUI_TAG_DEFAULT_OPTIONS: TuiTagOptions = {
    size: `m`,
    status: `default`,
    autoColor: false,
};

/**
 * Default parameters for Tag component
 */
export const TUI_TAG_OPTIONS = tuiCreateOptions(TUI_TAG_DEFAULT_OPTIONS);

export function tuiTagOptionsProvider(options: Partial<TuiTagOptions>): Provider {
    return tuiProvideOptions(TUI_TAG_OPTIONS, options, TUI_TAG_DEFAULT_OPTIONS);
}
