import {InjectionToken} from '@angular/core';

export const TUI_THEME = new InjectionToken('TUI_THEME', {
    factory: () => 'Taiga UI',
});
