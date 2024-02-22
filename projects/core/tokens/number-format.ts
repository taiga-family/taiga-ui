import {InjectionToken, Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TUI_DEFAULT_NUMBER_FORMAT} from '@taiga-ui/core/constants';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';
import {Observable} from 'rxjs';

/**
 * Formatting configuration for displayed numbers
 */
export const TUI_NUMBER_FORMAT: InjectionToken<
    Observable<TuiNumberFormatSettings> | TuiNumberFormatSettings
> = tuiCreateToken(TUI_DEFAULT_NUMBER_FORMAT);

export function tuiNumberFormatProvider(
    options: Partial<TuiNumberFormatSettings>,
): Provider {
    return tuiProvideOptions(TUI_NUMBER_FORMAT, options, TUI_DEFAULT_NUMBER_FORMAT);
}
