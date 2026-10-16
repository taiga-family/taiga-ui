import {InjectionToken, type WritableSignal} from '@angular/core';

export const TUI_TEXTFIELD_VALUE = new InjectionToken<WritableSignal<string>>(
    ngDevMode ? 'TUI_TEXTFIELD_VALUE' : '',
);
