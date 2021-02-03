import {InjectionToken} from '@angular/core';
import {TuiSizeL} from '@taiga-ui/core';

export interface CheckboxOptions {
    size: TuiSizeL;
}

/** Default values for the checkbox options. */
export const TUI_CHECKBOX_DEFAULT_OPTIONS: CheckboxOptions = {
    size: 'm',
};

/** Injection token that can be used to specify checkbox options. */
export const TUI_CHECKBOX_OPTIONS = new InjectionToken<Readonly<CheckboxOptions>>(
    'tui-checkbox-default-options',
    {
        factory: () => TUI_CHECKBOX_DEFAULT_OPTIONS,
    },
);
