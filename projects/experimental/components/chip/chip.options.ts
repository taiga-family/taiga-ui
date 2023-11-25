import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeXXS} from '@taiga-ui/core';

export interface TuiChipOptions {
    readonly appearance: string;
    readonly size: TuiSizeXXS;
}

export const TUI_CHIP_DEFAULT_OPTIONS: TuiChipOptions = {
    size: `s`,
    appearance: `neutral`,
};

export const TUI_CHIP_OPTIONS = tuiCreateToken(TUI_CHIP_DEFAULT_OPTIONS);

export function tuiChipOptionsProvider(options: Partial<TuiChipOptions>): Provider {
    return tuiProvideOptions(TUI_CHIP_OPTIONS, options, TUI_CHIP_DEFAULT_OPTIONS);
}
