import {InjectionToken} from '@angular/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

/**
 * Validation errors
 */
export const TUI_VALIDATION_ERRORS = new InjectionToken<
    Record<string, Observable<PolymorpheusContent> | PolymorpheusContent>
>(`[TUI_VALIDATION_ERRORS]`, {
    factory: () => ({}),
});
