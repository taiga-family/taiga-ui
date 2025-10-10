import {InjectionToken, type Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiPushOptions {
    readonly buttons: readonly string[];
    readonly heading: string;
    readonly icon: string;
    readonly iconColor: string;
    readonly image: string;
    readonly timestamp: number | string;
    readonly type: string;
    readonly position: 'bottom' | 'top';
    readonly orientation: 'center' | 'end' | 'start';
}

export const TUI_PUSH_DEFAULT_OPTIONS: TuiPushOptions = {
    heading: '',
    type: '',
    timestamp: '',
    image: '',
    icon: '',
    iconColor: '',
    buttons: [],
    position: 'bottom',
    orientation: 'center',
};

/**
 * Default parameters for Push component
 */
export const TUI_PUSH_OPTIONS = new InjectionToken(ngDevMode ? 'TUI_PUSH_OPTIONS' : '', {
    factory: () => TUI_PUSH_DEFAULT_OPTIONS,
});

export function tuiPushOptionsProvider(options: Partial<TuiPushOptions>): Provider {
    return tuiProvideOptions(TUI_PUSH_OPTIONS, options, TUI_PUSH_DEFAULT_OPTIONS);
}
