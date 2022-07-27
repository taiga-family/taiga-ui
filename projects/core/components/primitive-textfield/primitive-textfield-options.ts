import {InjectionToken, ValueProvider} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiPrimitiveTextfieldOptions {
    readonly iconCleaner: PolymorpheusContent;
}

/** Default values for primitive textfield options */
export const TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS: TuiPrimitiveTextfieldOptions = {
    iconCleaner: 'tuiIconCloseLarge',
};

export const TUI_PRIMITIVE_TEXTFIELD_OPTIONS =
    new InjectionToken<TuiPrimitiveTextfieldOptions>(
        'Default parameters for primitive textfield component',
        {
            factory: () => TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS,
        },
    );

export const tuiPrimitiveTextfieldOptionsProvider: (
    options: Partial<TuiPrimitiveTextfieldOptions>,
) => ValueProvider = (options: Partial<TuiPrimitiveTextfieldOptions>) => ({
    provide: TUI_PRIMITIVE_TEXTFIELD_OPTIONS,
    useValue: {...TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS, ...options},
});
