import {tuiCreateToken} from '@taiga-ui/cdk';
import {TUI_DEFAULT_NUMBER_FORMAT} from '@taiga-ui/core/constants';
import {of} from 'rxjs';

/**
 * Formatting configuration for displayed numbers
 */
export const TUI_NUMBER_FORMAT_OBSERVABLE = tuiCreateToken(
    of({...TUI_DEFAULT_NUMBER_FORMAT, decimalLimit: NaN}),
);
