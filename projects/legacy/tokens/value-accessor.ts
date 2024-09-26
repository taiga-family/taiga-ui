import type {ControlValueAccessor} from '@angular/forms';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 * Buffer token to pass NG_VALUE_ACCESSOR to a different Injector
 */
export const TUI_VALUE_ACCESSOR = tuiCreateToken<ControlValueAccessor>();
