import {InjectionToken, ValueProvider} from '@angular/core';

export interface TuiDropdownHoverOptions {
    readonly showDelay: number;
    readonly hideDelay: number;
}

/** Default values for hint options */
export const TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS: TuiDropdownHoverOptions = {
    showDelay: 200,
    hideDelay: 500,
};

export const TUI_DROPDOWN_HOVER_OPTIONS = new InjectionToken<TuiDropdownHoverOptions>(
    '[TUI_DROPDOWN_HOVER_OPTIONS] Default parameters for dropdown hover directive',
    {
        factory: () => TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
    },
);

export const tuiDropdownHoverOptionsProvider: (
    options: Partial<TuiDropdownHoverOptions>,
) => ValueProvider = (options: Partial<TuiDropdownHoverOptions>) => ({
    provide: TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
    useValue: {...TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS, ...options},
});
