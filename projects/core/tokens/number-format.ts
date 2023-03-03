import {InjectionToken} from '@angular/core';
import {TUI_DEFAULT_NUMBER_FORMAT} from '@taiga-ui/core/constants';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';

/**
 * Formatting configuration for displayed numbers
 */
export const TUI_NUMBER_FORMAT = new InjectionToken<TuiNumberFormatSettings>(
    `[TUI_NUMBER_FORMAT]`,
    {
        factory: () => TUI_DEFAULT_NUMBER_FORMAT,
    },
);
