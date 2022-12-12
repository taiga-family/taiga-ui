import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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

export const TUI_TEXTFIELD_OPTIONS = new InjectionToken<TuiTextfieldOptions>(
    `[TUI_TEXTFIELD_OPTIONS]: Default parameters for textfield`,
    {factory: () => TUI_TEXTFIELD_DEFAULT_OPTIONS},
);

export const tuiTextfieldOptionsProvider: (
    options: Partial<TuiTextfieldOptions>,
) => ValueProvider = (options: Partial<TuiTextfieldOptions>) => ({
    provide: TUI_TEXTFIELD_OPTIONS,
    useValue: {...TUI_TEXTFIELD_DEFAULT_OPTIONS, ...options},
});
