import {InjectionToken} from '@angular/core';
import type {ControlValueAccessor} from '@angular/forms';

export const TUI_VALUE_ACCESSOR = new InjectionToken<ControlValueAccessor>(
    `Buffer token to pass NG_VALUE_ACCESSOR to a different Injector`,
);
