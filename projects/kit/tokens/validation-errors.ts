import {InjectionToken, type Provider} from '@angular/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {type Observable} from 'rxjs';

export const TUI_VALIDATION_ERRORS = new InjectionToken<
    Record<string, Observable<PolymorpheusContent> | PolymorpheusContent>
>(ngDevMode ? 'TUI_VALIDATION_ERRORS' : '', {
    factory: () => ({}),
});

export const tuiValidationErrorsProvider = (
    useValue: Record<string, Observable<PolymorpheusContent> | PolymorpheusContent>,
): Provider => ({provide: TUI_VALIDATION_ERRORS, useValue});
