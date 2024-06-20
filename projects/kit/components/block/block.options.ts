import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core/types';

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
