import {Provider} from '@angular/core';
import {TuiContextWithImplicit, tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeM, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_ARROW} from './arrow.component';

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

export interface TuiArrowMode {
    readonly interactive: PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeL | TuiSizeM | TuiSizeS>
    >;
    readonly disabled: PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeL | TuiSizeM | TuiSizeS>
    >;
}

export const TUI_ARROW_DEFAULT_MODE: TuiArrowMode = {
    interactive: TUI_ARROW,
    disabled: TUI_ARROW,
};

/**
 * Type of icon in dropdowns for interactive or disable mode
 */
export const TUI_ARROW_MODE = tuiCreateOptions(TUI_ARROW_DEFAULT_MODE);

export function tuiArrowModeProvider(options: Partial<TuiArrowMode>): Provider {
    return tuiProvideOptions(TUI_ARROW_MODE, options, TUI_ARROW_DEFAULT_MODE);
}
