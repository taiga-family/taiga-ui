import {type FactoryProvider, inject, InjectionToken} from '@angular/core';
import {TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/components/notification';

import {type TuiAlertOptions} from './alert.interfaces';

export const TUI_ALERT_DEFAULT_OPTIONS: Omit<TuiAlertOptions, 'appearance' | 'icon'> = {
    autoClose: 3000,
    label: '',
    closable: true,
    data: undefined,
    position: 'top',
    orientation: 'end',
};

export const TUI_ALERT_OPTIONS = new InjectionToken<TuiAlertOptions>(
    ngDevMode ? 'TUI_ALERT_OPTIONS' : '',
    {
        factory: () => ({
            ...TUI_ALERT_DEFAULT_OPTIONS,
            ...inject(TUI_NOTIFICATION_OPTIONS),
        }),
    },
);

export function tuiAlertOptionsProvider(
    options: Partial<TuiAlertOptions>,
): FactoryProvider {
    return {
        provide: TUI_ALERT_OPTIONS,
        useFactory: (): TuiAlertOptions => ({
            ...TUI_ALERT_DEFAULT_OPTIONS,
            ...(inject(TUI_ALERT_OPTIONS, {optional: true, skipSelf: true}) ||
                inject(TUI_NOTIFICATION_OPTIONS)),
            ...options,
        }),
    };
}
