import {InjectionToken, type Provider, type Signal} from '@angular/core';
import {tuiProvideFactory} from '@taiga-ui/cdk/utils/di';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export const TUI_VALIDATION_ERRORS = new InjectionToken<
    Record<string, PolymorpheusContent | Signal<PolymorpheusContent>>
>(ngDevMode ? 'TUI_VALIDATION_ERRORS' : '', {factory: () => ({})});

type ValidationValue = Record<string, PolymorpheusContent | Signal<PolymorpheusContent>>;

export const tuiValidationErrorsProvider = (
    valueOrFactory: ValidationValue | (() => ValidationValue),
): Provider => tuiProvideFactory(TUI_VALIDATION_ERRORS, valueOrFactory);
