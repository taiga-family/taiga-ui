import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeXXS} from '@taiga-ui/core/types';

export interface TuiChipOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeXXS;
}

export const TUI_CHIP_DEFAULT_OPTIONS: TuiChipOptions = {
    appearance: 'neutral',
    size: 's',
};

export const TUI_CHIP_OPTIONS = tuiCreateToken(TUI_CHIP_DEFAULT_OPTIONS);

export function tuiChipOptionsProvider(options: Partial<TuiChipOptions>): Provider {
    return tuiProvideOptions(TUI_CHIP_OPTIONS, options, TUI_CHIP_DEFAULT_OPTIONS);
}
