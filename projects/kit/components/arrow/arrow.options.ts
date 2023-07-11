import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiArrowOptions {
    readonly iconSmall: PolymorpheusContent;
    readonly iconLarge: PolymorpheusContent;
}

/** Default values for arrow options */
export const TUI_ARROW_DEFAULT_OPTIONS: TuiArrowOptions = {
    iconSmall: `tuiIconChevronDown`,
    iconLarge: `tuiIconChevronDownLarge`,
};

/**
 * Default parameters for arrow component
 */
export const TUI_ARROW_OPTIONS = tuiCreateOptions(TUI_ARROW_DEFAULT_OPTIONS);

export function tuiArrowOptionsProvider(options: Partial<TuiArrowOptions>): Provider {
    return tuiProvideOptions(TUI_ARROW_OPTIONS, options, TUI_ARROW_DEFAULT_OPTIONS);
}
