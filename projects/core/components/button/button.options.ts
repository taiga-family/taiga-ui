import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core/types';

export interface TuiButtonOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeXL | TuiSizeXS;
}

export const TUI_BUTTON_DEFAULT_OPTIONS: TuiButtonOptions = {
    appearance: 'primary',
    size: 'l',
};

export const [TUI_BUTTON_OPTIONS, tuiButtonOptionsProvider] = tuiCreateOptions(
    TUI_BUTTON_DEFAULT_OPTIONS,
);
