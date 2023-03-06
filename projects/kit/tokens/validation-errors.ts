import {InjectionToken} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

/**
 * Validation errors
 */
export const TUI_VALIDATION_ERRORS = new InjectionToken<
    Record<string, Observable<PolymorpheusContent> | PolymorpheusContent>
>(`[TUI_VALIDATION_ERRORS]`, {
    factory: () => ({}),
});
