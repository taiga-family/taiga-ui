import {InjectionToken, type Signal} from '@angular/core';

export const TUI_TEXTFIELD_VALUE = new InjectionToken<Signal<string>>(
    ngDevMode ? 'TUI_TEXTFIELD_VALUE' : '',
);
