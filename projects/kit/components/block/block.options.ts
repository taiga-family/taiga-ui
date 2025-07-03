import type {Provider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface TuiBlockOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeL | TuiSizeS;
}

export const TUI_BLOCK_DEFAULT_OPTIONS: TuiBlockOptions = {
    appearance: 'outline-grayscale',
    size: 'l',
};

export const TUI_BLOCK_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_BLOCK_OPTIONS' : '',
    {
        factory: () => TUI_BLOCK_DEFAULT_OPTIONS,
    },
);

export function tuiBlockOptionsProvider(options: Partial<TuiBlockOptions>): Provider {
    return tuiProvideOptions(TUI_BLOCK_OPTIONS, options, TUI_BLOCK_DEFAULT_OPTIONS);
}
