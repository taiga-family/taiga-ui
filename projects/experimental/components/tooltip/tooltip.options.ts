import {Provider} from '@angular/core';
import {tuiCreateToken, TuiPlatform, tuiProvideOptions} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiTooltipOptions {
    readonly icons: Record<TuiPlatform, PolymorpheusContent> | string;
}

export const TUI_TOOLTIP_DEFAULT_OPTIONS: TuiTooltipOptions = {
    icons: 'tuiIconHelpCircle',
};

export const TUI_TOOLTIP_OPTIONS = tuiCreateToken(TUI_TOOLTIP_DEFAULT_OPTIONS);

export function tuiTooltipOptionsProvider(options: Partial<TuiTooltipOptions>): Provider {
    return tuiProvideOptions(TUI_TOOLTIP_OPTIONS, options, TUI_TOOLTIP_DEFAULT_OPTIONS);
}
