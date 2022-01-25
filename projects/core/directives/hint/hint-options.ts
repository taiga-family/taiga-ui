import {InjectionToken} from '@angular/core';
import {
    TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
    TuiAbstractHintOptions,
} from '@taiga-ui/core/abstract';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiHintOptions extends TuiAbstractHintOptions {
    readonly tuiHintShowDelay: number;
    readonly tuiHintHideDelay: number;
    readonly tooltipIcon: PolymorpheusContent;
}

// TODO: remove in ivy compilation
export const TUI_TOOLTIP_ICON = 'tuiIconTooltipLarge';

/** Default values for hint options */
export const TUI_HINT_DEFAULT_OPTIONS: TuiHintOptions = {
    ...TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
    tuiHintShowDelay: 500,
    tuiHintHideDelay: 200,
    tooltipIcon: TUI_TOOLTIP_ICON,
};

export const TUI_HINT_OPTIONS = new InjectionToken<TuiHintOptions>(
    'Default parameters for hint directive',
    {
        factory: () => TUI_HINT_DEFAULT_OPTIONS,
    },
);
