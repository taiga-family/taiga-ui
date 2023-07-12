import {Provider} from '@angular/core';
import {TuiContextWithImplicit, tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiAppearance, TuiSizeL} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiToggleOptions {
    readonly icons: Readonly<{
        toggleOff: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL>>;
        toggleOn: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL>>;
    }>;
    readonly appearances: Readonly<{
        unchecked: string;
        checked: string;
    }>;
    readonly singleColor: boolean;
    readonly showIcons: boolean;
    readonly size: TuiSizeL;
}

/** Default values for the toggle options. */
export const TUI_TOGGLE_DEFAULT_OPTIONS: TuiToggleOptions = {
    icons: {
        toggleOff({$implicit}: TuiContextWithImplicit<TuiSizeL>): string {
            return $implicit === `m` ? `tuiIconToggleOff` : `tuiIconToggleOffLarge`;
        },
        toggleOn({$implicit}: TuiContextWithImplicit<TuiSizeL>): string {
            return $implicit === `m` ? `tuiIconToggleOn` : `tuiIconToggleOnLarge`;
        },
    },
    appearances: {
        checked: TuiAppearance.Primary,
        unchecked: TuiAppearance.Secondary,
    },
    singleColor: false,
    showIcons: false,
    size: `m`,
};

/**
 * Default parameters for Toggle component
 */
export const TUI_TOGGLE_OPTIONS = tuiCreateOptions(TUI_TOGGLE_DEFAULT_OPTIONS);

export function tuiToggleOptionsProvider(options: Partial<TuiToggleOptions>): Provider {
    return tuiProvideOptions(TUI_TOGGLE_OPTIONS, options, TUI_TOGGLE_DEFAULT_OPTIONS);
}
