import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';

export const TUI_MESSAGE_DEFAULT_OPTIONS: TuiAppearanceOptions = {
    appearance: 'neutral',
};

export const TUI_MESSAGE_OPTIONS = tuiCreateToken(TUI_MESSAGE_DEFAULT_OPTIONS);

export function tuiMessageOptionsProvider(
    options: Partial<TuiAppearanceOptions>,
): Provider {
    return tuiProvideOptions(TUI_MESSAGE_OPTIONS, options, TUI_MESSAGE_DEFAULT_OPTIONS);
}
