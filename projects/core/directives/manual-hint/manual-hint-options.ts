import {InjectionToken, ValueProvider} from '@angular/core';
import {
    TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
    TuiAbstractHintOptions,
} from '@taiga-ui/core/abstract';

export type TuiManualHintOptions = TuiAbstractHintOptions;

/** Default values for manual hint options */
export const TUI_MANUAL_HINT_DEFAULT_OPTIONS: TuiManualHintOptions = {
    ...TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
};

export const TUI_MANUAL_HINT_OPTIONS = new InjectionToken<TuiManualHintOptions>(
    `Default parameters for manual hint directive`,
    {
        factory: () => TUI_MANUAL_HINT_DEFAULT_OPTIONS,
    },
);

export const tuiManualHintOptionsProvider: (
    options: Partial<TuiManualHintOptions>,
) => ValueProvider = (options: Partial<TuiManualHintOptions>) => ({
    provide: TUI_MANUAL_HINT_OPTIONS,
    useValue: {...TUI_MANUAL_HINT_DEFAULT_OPTIONS, ...options},
});
