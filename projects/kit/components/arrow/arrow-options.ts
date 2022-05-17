import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeM, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_ARROW} from './arrow.component';

export interface TuiArrowOptions {
    readonly iconSmall: PolymorpheusContent;
    readonly iconLarge: PolymorpheusContent;
}

// TODO: 3.0 remove in ivy compilation
export const TUI_ARROW_ICON_SMALL = 'tuiIconChevronDown';
export const TUI_ARROW_ICON_LARGE = 'tuiIconChevronDownLarge';

/** Default values for arrow options */
export const TUI_ARROW_DEFAULT_OPTIONS: TuiArrowOptions = {
    iconSmall: TUI_ARROW_ICON_SMALL,
    iconLarge: TUI_ARROW_ICON_LARGE,
};

export const TUI_ARROW_OPTIONS = new InjectionToken<TuiArrowOptions>(
    'Default parameters for arrow component',
    {
        factory: () => TUI_ARROW_DEFAULT_OPTIONS,
    },
);

export const tuiArrowOptionsProvider: (
    options: Partial<TuiArrowOptions>,
) => ValueProvider = (options: Partial<TuiArrowOptions>) => ({
    provide: TUI_ARROW_OPTIONS,
    useValue: {...TUI_ARROW_DEFAULT_OPTIONS, ...options},
});

export interface TuiArrowMode {
    readonly interactive: PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeS | TuiSizeM | TuiSizeL>
    >;
    readonly disabled: PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeS | TuiSizeM | TuiSizeL>
    >;
}

export const TUI_ARROW_MODE: InjectionToken<TuiArrowMode> = new InjectionToken(
    'Type of icon in dropdowns for interactive or disable mode',
    {
        factory: () => ({
            interactive: TUI_ARROW,
            disabled: TUI_ARROW,
        }),
    },
);

export const tuiArrowModeProvider: (options: Partial<TuiArrowMode>) => ValueProvider = (
    options: Partial<TuiArrowMode>,
) => ({
    provide: TUI_ARROW_MODE,
    useValue: {
        interactive: TUI_ARROW,
        disabled: TUI_ARROW,
        ...options,
    },
});
