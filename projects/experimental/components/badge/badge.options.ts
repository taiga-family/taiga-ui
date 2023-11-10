import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeS, TuiSizeXL} from '@taiga-ui/core';

export interface TuiBadgeOptions {
    readonly appearance: string;
    readonly size: TuiSizeS | TuiSizeXL;
    readonly dot: boolean;
}

export const TUI_BADGE_DEFAULT_OPTIONS: TuiBadgeOptions = {
    size: `l`,
    appearance: `default`,
    dot: false,
};

export const TUI_BADGE_OPTIONS = tuiCreateToken(TUI_BADGE_DEFAULT_OPTIONS);

export function tuiBadgeOptionsProvider(options: Partial<TuiBadgeOptions>): Provider {
    return tuiProvideOptions(TUI_BADGE_OPTIONS, options, TUI_BADGE_DEFAULT_OPTIONS);
}
