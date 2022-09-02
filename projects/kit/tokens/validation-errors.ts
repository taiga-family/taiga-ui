import {InjectionToken} from '@angular/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

export const TUI_VALIDATION_ERRORS = new InjectionToken<
    Record<string, PolymorpheusContent | Observable<PolymorpheusContent>>
>(`Validation errors`, {
    factory: () => ({}),
});
