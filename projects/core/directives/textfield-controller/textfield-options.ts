import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiTextfieldOptions {
    readonly iconCleaner:
        | PolymorpheusContent
        | PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>>;
}

/** Default values for primitive textfield options */
export const TUI_TEXTFIELD_DEFAULT_OPTIONS: TuiTextfieldOptions = {
    iconCleaner: ({$implicit}: TuiContextWithImplicit<TuiSizeL | TuiSizeS>) =>
        $implicit === `s` ? `tuiIconClose` : `tuiIconCloseLarge`,
};

/**
 * Default parameters for textfield
 */
export const TUI_TEXTFIELD_OPTIONS = new InjectionToken<TuiTextfieldOptions>(
    `[TUI_TEXTFIELD_OPTIONS]`,
    {factory: () => TUI_TEXTFIELD_DEFAULT_OPTIONS},
);

export const tuiTextfieldOptionsProvider: (
    options: Partial<TuiTextfieldOptions>,
) => ValueProvider = (options: Partial<TuiTextfieldOptions>) => ({
    provide: TUI_TEXTFIELD_OPTIONS,
    useValue: {...TUI_TEXTFIELD_DEFAULT_OPTIONS, ...options},
});
