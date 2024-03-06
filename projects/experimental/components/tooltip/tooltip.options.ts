import type {Provider} from '@angular/core';
import type {TuiPlatform} from '@taiga-ui/cdk';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiTooltipOptions {
    readonly icons: Record<TuiPlatform, string> | string;
}

export const TUI_TOOLTIP_DEFAULT_OPTIONS: TuiTooltipOptions = {
    icons: 'tuiIconHelpCircle',
};

export const TUI_TOOLTIP_OPTIONS = tuiCreateToken(TUI_TOOLTIP_DEFAULT_OPTIONS);

export function tuiTooltipOptionsProvider(options: Partial<TuiTooltipOptions>): Provider {
    return tuiProvideOptions(TUI_TOOLTIP_OPTIONS, options, TUI_TOOLTIP_DEFAULT_OPTIONS);
}
