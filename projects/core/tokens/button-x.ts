import {InjectionToken, type Type} from '@angular/core';

export const TUI_BUTTON_X = new InjectionToken<Type<unknown>>(
    ngDevMode ? 'TUI_BUTTON_X' : '',
);
