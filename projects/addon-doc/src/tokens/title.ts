import {InjectionToken} from '@angular/core';

export const TUI_DOC_TITLE = new InjectionToken<string>(`[TUI_DOC_TITLE]: Page title`, {
    factory: () => ``,
});
