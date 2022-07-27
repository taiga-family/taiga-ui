import {InjectionToken, ValueProvider} from '@angular/core';
import {
    TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
    TuiAbstractHintOptions,
} from '@taiga-ui/core/abstract';

export interface TuiPointerHintOptions extends TuiAbstractHintOptions {
    readonly tuiHintShowDelay: number;
    readonly tuiHintHideDelay: number;
}

/** Default values for pointer hint options */
export const TUI_POINTER_HINT_DEFAULT_OPTIONS: TuiPointerHintOptions = {
    ...TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
    tuiHintShowDelay: 0,
    tuiHintHideDelay: 0,
};

export const TUI_POINTER_HINT_OPTIONS = new InjectionToken<TuiPointerHintOptions>(
    `Default parameters for pointer hint directive`,
    {
        factory: () => TUI_POINTER_HINT_DEFAULT_OPTIONS,
    },
);

export const tuiPointerHintOptionsProvider: (
    options: Partial<TuiPointerHintOptions>,
) => ValueProvider = (options: Partial<TuiPointerHintOptions>) => ({
    provide: TUI_POINTER_HINT_OPTIONS,
    useValue: {...TUI_POINTER_HINT_DEFAULT_OPTIONS, ...options},
});
