import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiPushOptions {
    readonly heading: string;
    readonly type: string;
    readonly timestamp: number;
    readonly image: string;
    readonly icon: string;
    readonly iconColor: string;
    readonly buttons: readonly string[];
}

export const TUI_PUSH_DEFAULT_OPTIONS: TuiPushOptions = {
    heading: ``,
    type: ``,
    timestamp: 0,
    image: ``,
    icon: ``,
    iconColor: ``,
    buttons: [],
};

/**
 * Default parameters for Push component
 */
export const TUI_PUSH_OPTIONS = tuiCreateOptions(TUI_PUSH_DEFAULT_OPTIONS);

export function tuiPushOptionsProvider(options: Partial<TuiPushOptions>): Provider {
    return tuiProvideOptions(TUI_PUSH_OPTIONS, options, TUI_PUSH_DEFAULT_OPTIONS);
}
