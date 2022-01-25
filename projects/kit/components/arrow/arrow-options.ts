import {InjectionToken} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiArrowOptions {
    readonly iconSmall: PolymorpheusContent;
    readonly iconLarge: PolymorpheusContent;
}

// TODO: remove in ivy compilation
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
