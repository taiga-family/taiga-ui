import {type FactoryProvider, InjectionToken, Optional, SkipSelf} from '@angular/core';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {tuiOverrideOptions} from '@taiga-ui/core/utils/miscellaneous';

export type TuiHintDirection =
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom'
    | 'left-bottom'
    | 'left-top'
    | 'left'
    | 'right-bottom'
    | 'right-top'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'top';

export const TUI_HINT_DIRECTIONS: readonly TuiHintDirection[] = [
    'bottom-left',
    'bottom',
    'bottom-right',
    'top-left',
    'top',
    'top-right',
    'left-top',
    'left',
    'left-bottom',
    'right-top',
    'right',
    'right-bottom',
];

export interface TuiHintOptions extends TuiAppearanceOptions {
    readonly direction: TuiHintDirection | TuiHintDirection[];
    readonly hideDelay: number;
    readonly icon: string;
    readonly showDelay: number;
}

/** Default values for hint options */
export const TUI_HINT_DEFAULT_OPTIONS: TuiHintOptions = {
    direction: 'bottom-left',
    showDelay: 500,
    hideDelay: 200,
    appearance: '',
    /** TODO @deprecated use {@link TUI_TOOLTIP_OPTIONS} instead **/
    icon: '@tui.circle-help',
};

/**
 * Default parameters for hint directive
 */
export const TUI_HINT_OPTIONS = new InjectionToken(ngDevMode ? 'TUI_HINT_OPTIONS' : '', {
    factory: () => TUI_HINT_DEFAULT_OPTIONS,
});

export const tuiHintOptionsProvider: (
    options: Partial<TuiHintOptions>,
) => FactoryProvider = (override: Partial<TuiHintOptions>) => ({
    provide: TUI_HINT_OPTIONS,
    deps: [[new Optional(), new SkipSelf(), TUI_HINT_OPTIONS]],
    useFactory: tuiOverrideOptions(override, TUI_HINT_DEFAULT_OPTIONS),
});
