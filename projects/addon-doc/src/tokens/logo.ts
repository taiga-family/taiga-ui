import {InjectionToken} from '@angular/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

/**
 * Main logo
 */
export const TUI_DOC_LOGO = new InjectionToken<PolymorpheusContent>(`[TUI_DOC_LOGO]`, {
    factory: () => ``,
});
