import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TUI_DEFAULT_NUMBER_FORMAT} from '@taiga-ui/core/constants';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';

/**
 * Formatting configuration for displayed numbers
 */
export const TUI_NUMBER_FORMAT = tuiCreateOptions(TUI_DEFAULT_NUMBER_FORMAT);

export function tuiNumberFormatProvider(
    options: Partial<TuiNumberFormatSettings>,
): Provider {
    return tuiProvideOptions(TUI_NUMBER_FORMAT, options, TUI_DEFAULT_NUMBER_FORMAT);
}
