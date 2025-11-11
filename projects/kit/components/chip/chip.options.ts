import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {type TuiSizeXXS} from '@taiga-ui/core/types';

export interface TuiChipOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeXXS;
}

export const TUI_CHIP_DEFAULT_OPTIONS: TuiChipOptions = {
    appearance: 'neutral',
    size: 's',
};

export const [TUI_CHIP_OPTIONS, tuiChipOptionsProvider] = tuiCreateOptions(
    TUI_CHIP_DEFAULT_OPTIONS,
);
