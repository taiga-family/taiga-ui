import type {Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {InjectionToken} from '@angular/core';

/**
 * @deprecated: drop in v5.0 use {@link TuiChevron}
 */
export interface TuiArrowOptions {
    readonly iconLarge: PolymorpheusContent;
    readonly iconSmall: PolymorpheusContent;
}

/**
 * @deprecated: drop in v5.0 use {@link TuiChevron}
 */
export const TUI_ARROW_DEFAULT_OPTIONS: TuiArrowOptions = {
    iconSmall: '@tui.chevron-down',
    iconLarge: '@tui.chevron-down',
};

/**
 * @deprecated: drop in v5.0
 * Default parameters for arrow component
 */
export const TUI_ARROW_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_ARROW_OPTIONS' : '',
    {
        factory: () => TUI_ARROW_DEFAULT_OPTIONS,
    },
);

export function tuiArrowOptionsProvider(options: Partial<TuiArrowOptions>): Provider {
    return tuiProvideOptions(TUI_ARROW_OPTIONS, options, TUI_ARROW_DEFAULT_OPTIONS);
}
