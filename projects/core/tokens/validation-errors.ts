import {InjectionToken, type Provider, type Signal} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/di';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

type ValidationValue = Record<string, PolymorpheusContent | Signal<PolymorpheusContent>>;

export const TUI_VALIDATION_ERRORS = new InjectionToken<ValidationValue>(
    ngDevMode ? 'TUI_VALIDATION_ERRORS' : '',
    {factory: () => ({})},
);

export const tuiValidationErrorsProvider = (
    valueOrFactory: ValidationValue | (() => ValidationValue),
): Provider => tuiProvideOptions(TUI_VALIDATION_ERRORS, valueOrFactory, {});
