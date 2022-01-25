import {InjectionToken} from '@angular/core';
import {
    AbstractHintOptions,
    TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
} from '@taiga-ui/core/abstract';

export type ManualHintOptions = AbstractHintOptions;

/** Default values for manual hint options */
export const TUI_MANUAL_HINT_DEFAULT_OPTIONS: ManualHintOptions = {
    ...TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
};

export const TUI_MANUAL_HINT_OPTIONS = new InjectionToken<ManualHintOptions>(
    'Default parameters for manual hint directive',
    {
        factory: () => TUI_MANUAL_HINT_DEFAULT_OPTIONS,
    },
);
