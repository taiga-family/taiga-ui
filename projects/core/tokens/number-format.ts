import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {TUI_DEFAULT_NUMBER_FORMAT} from '@taiga-ui/core/constants';
import type {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';

/**
 * Formatting configuration for displayed numbers
 */
export const TUI_NUMBER_FORMAT = new InjectionToken<TuiNumberFormatSettings>(
    `[TUI_NUMBER_FORMAT]`,
    {
        factory: () => TUI_DEFAULT_NUMBER_FORMAT,
    },
);

export const tuiNumberFormatProvider: (
    options: Partial<TuiNumberFormatSettings>,
) => ValueProvider = (options: Partial<TuiNumberFormatSettings>) => ({
    provide: TUI_NUMBER_FORMAT,
    useValue: {...TUI_DEFAULT_NUMBER_FORMAT, ...options},
});
