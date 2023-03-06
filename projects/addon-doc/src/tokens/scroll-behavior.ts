import {InjectionToken} from '@angular/core';

/**
 * Defines the transition animation for scroll
 */
export const TUI_DOC_SCROLL_BEHAVIOR = new InjectionToken<ScrollBehavior>(
    `[TUI_DOC_SCROLL_BEHAVIOR]`,
    {factory: () => `smooth`},
);
