import {InjectionToken} from '@angular/core';
import {
    AbstractHintOptions,
    TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
} from '@taiga-ui/core/abstract';

export interface PointerHintOptions extends AbstractHintOptions {
    readonly tuiHintShowDelay: number;
    readonly tuiHintHideDelay: number;
}

/** Default values for pointer hint options */
export const TUI_POINTER_HINT_DEFAULT_OPTIONS: PointerHintOptions = {
    ...TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
    tuiHintShowDelay: 0,
    tuiHintHideDelay: 0,
};

export const TUI_POINTER_HINT_OPTIONS = new InjectionToken<PointerHintOptions>(
    'Default parameters for pointer hint directive',
    {
        factory: () => TUI_POINTER_HINT_DEFAULT_OPTIONS,
    },
);
