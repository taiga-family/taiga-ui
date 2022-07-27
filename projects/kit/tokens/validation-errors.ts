import {InjectionToken} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

export const TUI_VALIDATION_ERRORS = new InjectionToken<
    Record<string, PolymorpheusContent | Observable<PolymorpheusContent>>
>(`Validation errors`, {
    factory: () => ({}),
});
