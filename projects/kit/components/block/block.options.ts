import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiAppearanceOptions, TuiSizeL, TuiSizeXS} from '@taiga-ui/core';

export interface TuiBlockOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeL | TuiSizeXS;
}

export const TUI_BLOCK_DEFAULT_OPTIONS: TuiBlockOptions = {
    appearance: 'whiteblock',
    size: 'l',
};

export const TUI_BLOCK_OPTIONS = tuiCreateToken(TUI_BLOCK_DEFAULT_OPTIONS);

export function tuiBlockOptionsProvider(options: Partial<TuiBlockOptions>): Provider {
    return tuiProvideOptions(TUI_BLOCK_OPTIONS, options, TUI_BLOCK_DEFAULT_OPTIONS);
}
