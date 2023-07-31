import {Provider} from '@angular/core';
import {TuiContextWithImplicit, tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

/**
 * TODO: replace with close icon token and drop hintOnDisabled, switching it to true in v.4
 */
export interface TuiTextfieldOptions {
    readonly hintOnDisabled: boolean;
    readonly iconCleaner: PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeL | TuiSizeS>
    >;
}

/** Default values for primitive textfield options */
export const TUI_TEXTFIELD_DEFAULT_OPTIONS: TuiTextfieldOptions = {
    iconCleaner: `tuiIconClose`,
    hintOnDisabled: false,
};

/**
 * Default parameters for textfield
 */
export const TUI_TEXTFIELD_OPTIONS = tuiCreateOptions(TUI_TEXTFIELD_DEFAULT_OPTIONS);

export function tuiTextfieldOptionsProvider(
    options: Partial<TuiTextfieldOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_TEXTFIELD_OPTIONS,
        options,
        TUI_TEXTFIELD_DEFAULT_OPTIONS,
    );
}
