import type {Provider} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiHintDirection} from '@taiga-ui/core/directives/hint';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * @deprecated: drop in v5.0
 */
export interface TuiInputCopyOptions {
    readonly icon: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
    readonly messageAppearance: string;
    readonly messageDirection: TuiHintDirection;
    readonly successMessage: PolymorpheusContent;
}

/**
 * @deprecated: drop in v5.0
 */
export const TUI_INPUT_COPY_DEFAULT_OPTIONS: TuiInputCopyOptions = {
    successMessage: '',
    messageDirection: 'bottom-left',
    messageAppearance: '',
    icon: () => '@tui.copy',
};

/**
 * @deprecated: drop in v5.0
 */
export const TUI_INPUT_COPY_OPTIONS = tuiCreateToken(TUI_INPUT_COPY_DEFAULT_OPTIONS);

/**
 * @deprecated: drop in v5.0
 */
export function tuiInputCopyOptionsProvider(
    options: Partial<TuiInputCopyOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_COPY_OPTIONS,
        options,
        TUI_INPUT_COPY_DEFAULT_OPTIONS,
    );
}
