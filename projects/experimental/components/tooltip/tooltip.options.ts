import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiTooltipOptions {
    readonly icons: Record<'android' | 'ios' | 'web', string> | string;
}

export const TUI_TOOLTIP_DEFAULT_OPTIONS: TuiTooltipOptions = {
    icons: '@tui.circle-help',
};

export const TUI_TOOLTIP_OPTIONS = tuiCreateToken(TUI_TOOLTIP_DEFAULT_OPTIONS);

export function tuiTooltipOptionsProvider(options: Partial<TuiTooltipOptions>): Provider {
    return tuiProvideOptions(TUI_TOOLTIP_OPTIONS, options, TUI_TOOLTIP_DEFAULT_OPTIONS);
}
