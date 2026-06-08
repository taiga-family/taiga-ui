import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';

export type TuiHintDirection =
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'end-bottom'
    | 'end-top'
    | 'end'
    | 'start-bottom'
    | 'start-top'
    | 'start'
    | 'top-end'
    | 'top-start'
    | 'top';

export const TUI_HINT_DIRECTIONS: readonly TuiHintDirection[] = [
    'bottom-start',
    'bottom',
    'bottom-end',
    'top-start',
    'top',
    'top-end',
    'start-top',
    'start',
    'start-bottom',
    'end-top',
    'end',
    'end-bottom',
];

export interface TuiHintOptions extends TuiAppearanceOptions {
    readonly direction: TuiHintDirection | TuiHintDirection[];
    readonly hideDelay: number;
    readonly icon: string;
    readonly showDelay: number;
}

/** Default values for hint options */
export const TUI_HINT_DEFAULT_OPTIONS: TuiHintOptions = {
    direction: 'bottom-start',
    showDelay: 500,
    hideDelay: 200,
    appearance: '',
    /** TODO @deprecated use {@link TUI_TOOLTIP_OPTIONS} instead **/
    icon: '@tui.circle-help',
};

/**
 * Default parameters for hint directive
 */
export const [TUI_HINT_OPTIONS, tuiHintOptionsProvider] = tuiCreateOptions(
    TUI_HINT_DEFAULT_OPTIONS,
);
