import type {Provider} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * @deprecated: drop in v5.0
 */
export interface TuiTextfieldOptions {
    readonly hintOnDisabled: boolean;
    readonly iconCleaner: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
}

/**
 * @deprecated: drop in v5.0
 * Default values for primitive textfield options
 */
export const TUI_TEXTFIELD_DEFAULT_OPTIONS: TuiTextfieldOptions = {
    iconCleaner: '@tui.x',
    hintOnDisabled: false,
};

/**
 * @deprecated: drop in v5.0
 * Default parameters for textfield
 */
export const TUI_TEXTFIELD_OPTIONS = tuiCreateToken(TUI_TEXTFIELD_DEFAULT_OPTIONS);

/**
 * @deprecated: drop in v5.0
 */
export function tuiTextfieldOptionsProvider(
    options: Partial<TuiTextfieldOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_TEXTFIELD_OPTIONS,
        options,
        TUI_TEXTFIELD_DEFAULT_OPTIONS,
    );
}
