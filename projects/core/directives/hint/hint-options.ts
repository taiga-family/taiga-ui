import {InjectionToken} from '@angular/core';
import {
    AbstractHintOptions,
    TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
} from '@taiga-ui/core/abstract';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface HintOptions extends AbstractHintOptions {
    readonly tuiHintShowDelay: number;
    readonly tuiHintHideDelay: number;
    readonly tooltipIcon: PolymorpheusContent;
}

// TODO: remove in ivy compilation
export const TOOLTIP_ICON = 'tuiIconTooltipLarge';

/** Default values for hint options */
export const TUI_HINT_DEFAULT_OPTIONS: HintOptions = {
    ...TUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
    tuiHintShowDelay: 500,
    tuiHintHideDelay: 200,
    tooltipIcon: TOOLTIP_ICON,
};

export const TUI_HINT_OPTIONS = new InjectionToken<HintOptions>(
    'Default parameters for hint directive',
    {
        factory: () => TUI_HINT_DEFAULT_OPTIONS,
    },
);
