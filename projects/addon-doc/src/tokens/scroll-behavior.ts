import {InjectionToken} from '@angular/core';

export const TUI_DOC_SCROLL_BEHAVIOR = new InjectionToken<ScrollBehavior>(
    `[TUI_DOC_SCROLL_BEHAVIOR] Defines the transition animation for scroll`,
    {factory: () => `smooth`},
);
