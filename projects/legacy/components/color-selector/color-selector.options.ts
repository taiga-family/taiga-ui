import type {Provider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiGradientDirection} from '@taiga-ui/cdk/utils/color';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_COLOR_SELECTOR_MODE_NAMES = new InjectionToken<[string, string]>(
    '[TUI_COLOR_SELECTOR_MODE_NAMES]',
    {
        factory: () => ['Solid color', 'Gradient'],
    },
);

/**
 * @deprecated: drop in v5.0
 */
export const TUI_DEFAULT_INPUT_COLORS = new Map([
    ['color-black-100', '#909090'],
    ['color-black-200', '#666666'],
    ['color-black-300', '#333333'],
    ['color-blue-100', '#1771e6'],
    ['color-blue-200', '#1464cc'],
    ['color-blue-300', '#0953b3'],
    ['color-gray-100', '#f5f5f6'],
    ['color-gray-200', '#e7e8ea'],
    ['color-gray-300', '#cbcfd3'],
    ['color-gray-400', '#959ba4'],
    ['color-gray-500', '#79818c'],
    ['color-gray-600', '#616871'],
    ['color-green-100', '#39b54a'],
    ['color-green-200', '#2ca53a'],
    ['color-green-300', '#168a21'],
    ['color-light-blue-100', '#ecf1f7'],
    ['color-light-blue-200', '#e4ebf3'],
    ['color-light-blue-300', '#dde4ed'],
    ['color-red-100', '#e01f19'],
    ['color-red-200', '#d3120e'],
    ['color-red-300', '#c40b08'],
    ['color-yellow-100', '#FFDD2C'],
    ['color-yellow-200', '#FCC521'],
    ['color-yellow-300', '#FAB618'],
    ['transparent', 'transparent'],
]);

/**
 * @deprecated: drop in v5.0
 */
export const TuiColorSelectorMode = {
    SolidColor: 0,
    Gradient: 1,
} as const;

/**
 * @deprecated: drop in v5.0
 */
export interface TuiColorSelectorOptions {
    readonly mode: (typeof TuiColorSelectorMode)[keyof typeof TuiColorSelectorMode];
    readonly selectorMode: boolean;
    readonly color: [number, number, number, number];
    readonly colors: ReadonlyMap<string, string>;
    readonly gradient: {
        readonly icons: Record<TuiGradientDirection, string>;
        readonly steps: ReadonlyArray<[number, [number, number, number, number]]>;
        readonly stop: number;
        readonly direction: TuiGradientDirection;
        readonly emptyStop: [number, number, number, number];
        readonly buttons: readonly TuiGradientDirection[];
    };
}

/**
 * @deprecated: drop in v5.0
 */
export const TUI_COLOR_SELECTOR_DEFAULT_OPTIONS: TuiColorSelectorOptions = {
    selectorMode: true,
    mode: TuiColorSelectorMode.SolidColor,
    color: [0, 0, 0, 1],
    colors: new Map<string, string>(),
    gradient: {
        icons: {
            'to top right': '@tui.move-up-right',
            'to right': '@tui.move-right',
            'to bottom right': '@tui.move-down-right',
            'to bottom': '@tui.move-down',
            'to bottom left': '@tui.move-down-left',
            'to left': '@tui.move-left',
            'to top left': '@tui.move-up-left',
            'to top': '@tui.move-up',
        },
        steps: [
            [0, [0, 0, 0, 1]],
            [1, [255, 255, 255, 1]],
        ],
        stop: 0,
        direction: 'to bottom',
        emptyStop: [0, 0, 0, 0],
        buttons: [
            'to top right',
            'to right',
            'to bottom right',
            'to bottom',
            'to bottom left',
            'to left',
            'to top left',
            'to top',
        ],
    },
};

/**
 * @deprecated: drop in v5.0
 */
export const TUI_COLOR_SELECTOR_OPTIONS = tuiCreateToken(
    TUI_COLOR_SELECTOR_DEFAULT_OPTIONS,
);

/**
 * @deprecated: drop in v5.0
 */
export function tuiColorSelectorOptionsProvider(
    options: Partial<TuiColorSelectorOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_COLOR_SELECTOR_OPTIONS,
        options,
        TUI_COLOR_SELECTOR_DEFAULT_OPTIONS,
    );
}
