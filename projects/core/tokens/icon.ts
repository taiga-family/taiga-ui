import {InjectionToken} from '@angular/core';

export const TUI_ICON_START = new InjectionToken(ngDevMode ? 'TUI_ICON_START' : '', {
    factory: () => '',
});
export const TUI_ICON_END = new InjectionToken(ngDevMode ? 'TUI_ICON_END' : '', {
    factory: () => '',
});
