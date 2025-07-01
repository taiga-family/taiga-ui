import type {Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {InjectionToken} from '@angular/core';

export interface TuiDropdownHoverOptions {
    readonly hideDelay: number;
    readonly showDelay: number;
}

/** Default values for hint options */
export const TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS: TuiDropdownHoverOptions = {
    showDelay: 200,
    hideDelay: 500,
};

/**
 * Default parameters for dropdown hover directive
 */
export const TUI_DROPDOWN_HOVER_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_DROPDOWN_HOVER_OPTIONS' : '',
    {
        factory: () => TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
    },
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
