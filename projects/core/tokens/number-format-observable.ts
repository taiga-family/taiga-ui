import {InjectionToken} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk';
import {TUI_DEFAULT_NUMBER_FORMAT} from '@taiga-ui/core/constants';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';
import {Observable, of} from 'rxjs';

/**
 * Formatting configuration for displayed numbers
 */
export const TUI_NUMBER_FORMAT_OBSERVABLE: InjectionToken<
    Observable<TuiNumberFormatSettings>
> = tuiCreateToken(of({...TUI_DEFAULT_NUMBER_FORMAT, decimalLimit: NaN}));
