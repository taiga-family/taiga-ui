import type {Provider} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeM, TuiSizeS} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_ARROW} from './arrow.component';

export interface TuiArrowMode {
    readonly disabled: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>>;
    readonly interactive: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>>;
}

export const TUI_ARROW_DEFAULT_MODE: TuiArrowMode = {
    interactive: TUI_ARROW,
    disabled: TUI_ARROW,
};

/**
 * Type of icon in dropdowns for interactive or disable mode
 */
export const TUI_ARROW_MODE = tuiCreateToken(TUI_ARROW_DEFAULT_MODE);

export function tuiArrowModeProvider(options: Partial<TuiArrowMode>): Provider {
    return tuiProvideOptions(TUI_ARROW_MODE, options, TUI_ARROW_DEFAULT_MODE);
}
