import {InjectionToken} from '@angular/core';
import {TuiDirection, TuiHintModeT} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TooltipOptions {
    readonly mode: TuiHintModeT | null;
    readonly direction: TuiDirection;
    readonly showDelay: number;
    readonly hideDelay: number;
    readonly icon: PolymorpheusContent;
}

// TODO: remove in ivy compilation
export const TOOLTIP_ICON = 'tuiIconTooltipLarge';

/** Default values for tooltip options */
export const TUI_TOOLTIP_DEFAULT_OPTIONS: TooltipOptions = {
    mode: null,
    direction: 'bottom-left',
    showDelay: 500,
    hideDelay: 200,
    icon: TOOLTIP_ICON,
};

export const TUI_TOOLTIP_OPTIONS = new InjectionToken<TooltipOptions>(
    'Default parameters for tooltip component',
    {
        factory: () => TUI_TOOLTIP_DEFAULT_OPTIONS,
    },
);
