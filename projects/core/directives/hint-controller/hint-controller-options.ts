import {InjectionToken} from '@angular/core';
import {
    TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
    TuiAbstractHintOptions,
} from '@taiga-ui/core/abstract';

export interface TuiHintControllerOptions extends TuiAbstractHintOptions {
    readonly tuiHintShowDelay: number;
    readonly tuiHintHideDelay: number;
}

/** Default values for hint controller options */
export const TUI_HINT_CONTROLLER_DEFAULT_OPTIONS: TuiHintControllerOptions = {
    ...TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
    tuiHintShowDelay: 500,
    tuiHintHideDelay: 200,
};

export const TUI_HINT_CONTROLLER_OPTIONS = new InjectionToken<TuiHintControllerOptions>(
    'Default parameters for hint controller directive',
    {
        factory: () => TUI_HINT_CONTROLLER_DEFAULT_OPTIONS,
    },
);
