import {type Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';
import {type TuiStatus} from '@taiga-ui/kit/types';

export interface TuiTagOptions {
    readonly autoColor: boolean;
    readonly size: TuiSizeL | TuiSizeS;
    readonly status: TuiStatus;
}

/** Default values for the tag options. */
export const TUI_TAG_DEFAULT_OPTIONS: TuiTagOptions = {
    size: 'm',
    status: 'default',
    autoColor: false,
};

/**
 * Default parameters for Tag component
 */
export const TUI_TAG_OPTIONS = tuiCreateToken(TUI_TAG_DEFAULT_OPTIONS);

export function tuiTagOptionsProvider(options: Partial<TuiTagOptions>): Provider {
    return tuiProvideOptions(TUI_TAG_OPTIONS, options, TUI_TAG_DEFAULT_OPTIONS);
}
