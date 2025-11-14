import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiBlockOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeL | TuiSizeS | '';
}

export const TUI_BLOCK_DEFAULT_OPTIONS: TuiBlockOptions = {
    appearance: 'outline-grayscale',
    size: 'l',
};

export const [TUI_BLOCK_OPTIONS, tuiBlockOptionsProvider] = tuiCreateOptions(
    TUI_BLOCK_DEFAULT_OPTIONS,
);
