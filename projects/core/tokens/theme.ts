import {InjectionToken} from '@angular/core';

export const TUI_THEME = new InjectionToken<string>(`[TUI_THEME]: Theme name`, {
    factory: () => `Taiga`,
});
