import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * @deprecated: drop in v5.0
 */
export interface TuiArrowOptions {
    readonly iconLarge: PolymorpheusContent;
    readonly iconSmall: PolymorpheusContent;
}

/**
 * @deprecated: drop in v5.0
 * Default values for arrow options
 */
export const TUI_ARROW_DEFAULT_OPTIONS: TuiArrowOptions = {
    iconSmall: '@tui.chevron-down',
    iconLarge: '@tui.chevron-down',
};

/**
 * @deprecated: drop in v5.0
 * Default parameters for arrow component
 */
export const TUI_ARROW_OPTIONS = tuiCreateToken(TUI_ARROW_DEFAULT_OPTIONS);

/**
 * @deprecated: drop in v5.0
 */
export function tuiArrowOptionsProvider(options: Partial<TuiArrowOptions>): Provider {
    return tuiProvideOptions(TUI_ARROW_OPTIONS, options, TUI_ARROW_DEFAULT_OPTIONS);
}
