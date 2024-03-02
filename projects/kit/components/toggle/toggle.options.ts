import {type Provider} from '@angular/core';
import {type TuiContext, tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiAppearance, type TuiSizeL} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiToggleOptions {
    readonly appearances: Readonly<{
        checked: string;
        unchecked: string;
    }>;
    readonly icons: Readonly<{
        toggleOff: PolymorpheusContent<TuiContext<TuiSizeL>>;
        toggleOn: PolymorpheusContent<TuiContext<TuiSizeL>>;
    }>;
    readonly showIcons: boolean;
    readonly singleColor: boolean;
    readonly size: TuiSizeL;
}

/** Default values for the toggle options. */
export const TUI_TOGGLE_DEFAULT_OPTIONS: TuiToggleOptions = {
    icons: {
        toggleOff({$implicit}: TuiContext<TuiSizeL>): string {
            return $implicit === 'm' ? 'tuiIconToggleOff' : 'tuiIconToggleOffLarge';
        },
        toggleOn({$implicit}: TuiContext<TuiSizeL>): string {
            return $implicit === 'm' ? 'tuiIconToggleOn' : 'tuiIconToggleOnLarge';
        },
    },
    appearances: {
        checked: TuiAppearance.Primary,
        unchecked: TuiAppearance.Secondary,
    },
    singleColor: false,
    showIcons: false,
    size: 'm',
};

/**
 * Default parameters for Toggle component
 */
export const TUI_TOGGLE_OPTIONS = tuiCreateToken(TUI_TOGGLE_DEFAULT_OPTIONS);

export function tuiToggleOptionsProvider(options: Partial<TuiToggleOptions>): Provider {
    return tuiProvideOptions(TUI_TOGGLE_OPTIONS, options, TUI_TOGGLE_DEFAULT_OPTIONS);
}
