import {InjectionToken} from '@angular/core';

export const TUI_TAB_MARGIN = new InjectionToken<number>(`Margin between tabs`, {
    factory: () => 24,
});
