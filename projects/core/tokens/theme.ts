import {InjectionToken} from '@angular/core';

export const TUI_THEME = new InjectionToken(ngDevMode ? 'TUI_THEME' : '', {
    factory: () => 'Taiga UI',
});
