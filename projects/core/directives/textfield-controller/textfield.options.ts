import type {Provider} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

/**
 * TODO: replace with TUI_COMMON_ICONS and drop hintOnDisabled, switching it to true in v.4
 */
export interface TuiTextfieldOptionsLegacy {
    readonly hintOnDisabled: boolean;
    readonly iconCleaner: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
}

/** Default values for primitive textfield options */
export const TUI_TEXTFIELD_DEFAULT_OPTIONS_LEGACY: TuiTextfieldOptionsLegacy = {
    iconCleaner: 'tuiIconClose',
    hintOnDisabled: false,
};

/**
 * Default parameters for textfield
 */
export const TUI_TEXTFIELD_OPTIONS_LEGACY = tuiCreateToken(
    TUI_TEXTFIELD_DEFAULT_OPTIONS_LEGACY,
);

export function tuiTextfieldOptionsProviderLegacy(
    options: Partial<TuiTextfieldOptionsLegacy>,
): Provider {
    return tuiProvideOptions(
        TUI_TEXTFIELD_OPTIONS_LEGACY,
        options,
        TUI_TEXTFIELD_DEFAULT_OPTIONS_LEGACY,
    );
}
