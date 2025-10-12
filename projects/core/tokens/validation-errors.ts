import {InjectionToken, type Provider, type Signal} from '@angular/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export const TUI_VALIDATION_ERRORS = new InjectionToken<
    Record<string, PolymorpheusContent | Signal<PolymorpheusContent>>
>(ngDevMode ? 'TUI_VALIDATION_ERRORS' : '', {
    factory: () => ({}),
});

export const tuiValidationErrorsProvider = (
    useValue: Record<string, PolymorpheusContent | Signal<PolymorpheusContent>>,
): Provider => ({provide: TUI_VALIDATION_ERRORS, useValue});
