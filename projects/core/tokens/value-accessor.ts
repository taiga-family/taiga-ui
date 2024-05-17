import {InjectionToken} from '@angular/core';
import type {ControlValueAccessor} from '@angular/forms';

/**
 * Buffer token to pass NG_VALUE_ACCESSOR to a different Injector
 * @deprecated
 * TODO: remove after textfield refactor before 4.0
 */
export const TUI_VALUE_ACCESSOR = new InjectionToken<ControlValueAccessor>(
    '[TUI_VALUE_ACCESSOR]',
);
