import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

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
export const [TUI_TEXTFIELD_OPTIONS, tuiTextfieldOptionsProvider] = tuiCreateOptions(
    TUI_TEXTFIELD_DEFAULT_OPTIONS,
);
