import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeM} from '@taiga-ui/core/types';

export interface TuiMessageOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeM;
}

export const TUI_MESSAGE_DEFAULT_OPTIONS: TuiMessageOptions = {
    appearance: 'neutral',
    size: 'm',
};

export const TUI_MESSAGE_OPTIONS = tuiCreateToken(TUI_MESSAGE_DEFAULT_OPTIONS);

export function tuiMessageOptionsProvider(options: Partial<TuiMessageOptions>): Provider {
    return tuiProvideOptions(TUI_MESSAGE_OPTIONS, options, TUI_MESSAGE_DEFAULT_OPTIONS);
}
