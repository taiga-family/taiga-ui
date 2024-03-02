import {type Provider} from '@angular/core';
import {type TuiContext, tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

/**
 * TODO: replace with TUI_COMMON_ICONS and drop hintOnDisabled, switching it to true in v.4
 */
export interface TuiTextfieldOptions {
    readonly hintOnDisabled: boolean;
    readonly iconCleaner: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
}

/** Default values for primitive textfield options */
export const TUI_TEXTFIELD_DEFAULT_OPTIONS: TuiTextfieldOptions = {
    iconCleaner: 'tuiIconClose',
    hintOnDisabled: false,
};

/**
 * Default parameters for textfield
 */
export const TUI_TEXTFIELD_OPTIONS = tuiCreateToken(TUI_TEXTFIELD_DEFAULT_OPTIONS);

export function tuiTextfieldOptionsProvider(
    options: Partial<TuiTextfieldOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_TEXTFIELD_OPTIONS,
        options,
        TUI_TEXTFIELD_DEFAULT_OPTIONS,
    );
}
