import {InjectionToken} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface ToggleOptions {
    readonly icons: Readonly<{
        toggleOff: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL>>;
        toggleOn: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL>>;
    }>;
    readonly singleColor: boolean;
    readonly showIcons: boolean;
    readonly size: TuiSizeL;
}

/** Default values for the toggle options. */
export const TUI_TOGGLE_DEFAULT_OPTIONS: ToggleOptions = {
    icons: {
        toggleOff({$implicit}: TuiContextWithImplicit<TuiSizeL>): string {
            return $implicit === 'm' ? 'tuiIconToggleOff' : 'tuiIconToggleOffLarge';
        },
        toggleOn({$implicit}: TuiContextWithImplicit<TuiSizeL>): string {
            return $implicit === 'm' ? 'tuiIconToggleOn' : 'tuiIconToggleOnLarge';
        },
    },
    singleColor: false,
    showIcons: false,
    size: 'm',
};

export const TUI_TOGGLE_OPTIONS = new InjectionToken<ToggleOptions>(
    'Default parameters for toggle component',
    {
        factory: () => TUI_TOGGLE_DEFAULT_OPTIONS,
    },
);
