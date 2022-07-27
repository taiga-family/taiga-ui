import {InjectionToken} from '@angular/core';

export const TUI_THEME = new InjectionToken<string>(`Theme name`, {
    factory: () => `Taiga`,
});
