import {InjectionToken} from '@angular/core';
import type {ControlValueAccessor} from '@angular/forms';

/**
 * @deprecated: drop in v5.0
 * Buffer token to pass NG_VALUE_ACCESSOR to a different Injector
 */
export const TUI_VALUE_ACCESSOR = new InjectionToken<ControlValueAccessor>(
    '[TUI_VALUE_ACCESSOR]',
);
