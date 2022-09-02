import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiToggleOptions {
    readonly icons: Readonly<{
        toggleOff: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL>>;
        toggleOn: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL>>;
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
    singleColor: false,
    showIcons: false,
    size: `m`,
};

export const TUI_TOGGLE_OPTIONS = new InjectionToken<TuiToggleOptions>(
    `Default parameters for toggle component`,
    {
        factory: () => TUI_TOGGLE_DEFAULT_OPTIONS,
    },
);

export const tuiToggleOptionsProvider: (
    options: Partial<TuiToggleOptions>,
) => ValueProvider = (options: Partial<TuiToggleOptions>) => ({
    provide: TUI_TOGGLE_OPTIONS,
    useValue: {...TUI_TOGGLE_DEFAULT_OPTIONS, ...options},
});
