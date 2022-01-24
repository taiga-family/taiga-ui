import {InjectionToken} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface ArrowOptions {
    readonly iconSmall: PolymorpheusContent;
    readonly iconLarge: PolymorpheusContent;
}

// TODO: remove in ivy compilation
export const ARROW_ICON_SMALL = 'tuiIconChevronDown';
export const ARROW_ICON_LARGE = 'tuiIconChevronDownLarge';

/** Default values for arrow options */
export const TUI_ARROW_DEFAULT_OPTIONS: ArrowOptions = {
    iconSmall: ARROW_ICON_SMALL,
    iconLarge: ARROW_ICON_LARGE,
};

export const TUI_ARROW_OPTIONS = new InjectionToken<ArrowOptions>(
    'Default parameters for arrow component',
    {
        factory: () => TUI_ARROW_DEFAULT_OPTIONS,
    },
);
