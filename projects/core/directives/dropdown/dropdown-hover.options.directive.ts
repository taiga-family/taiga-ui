import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiDropdownHoverOptions {
    readonly showDelay: number;
    readonly hideDelay: number;
}

/** Default values for hint options */
export const TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS: TuiDropdownHoverOptions = {
    showDelay: 200,
    hideDelay: 500,
};

/**
 * Default parameters for dropdown hover directive
 */
export const TUI_DROPDOWN_HOVER_OPTIONS = tuiCreateOptions(
    TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
);

export function tuiDropdownHoverOptionsProvider(
    options: Partial<TuiDropdownHoverOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_DROPDOWN_HOVER_OPTIONS,
        options,
        TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
    );
}
