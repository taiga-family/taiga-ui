import {type FactoryProvider, inject, InjectionToken, type Type} from '@angular/core';
import {type TuiPopover} from '@taiga-ui/cdk/services';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/components/notification';
import {BehaviorSubject, combineLatest, map, of} from 'rxjs';

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

export const TUI_ALERT_POSITION = new InjectionToken<string>(
    ngDevMode ? 'TUI_ALERT_POSITION' : '',
    {
        factory: () => (inject(TUI_IS_MOBILE) ? '0.625rem 1rem' : '1.625rem 3rem'),
    },
);

export const TUI_ALERTS = new InjectionToken(ngDevMode ? 'TUI_ALERTS' : '', {
    factory: () => new BehaviorSubject<ReadonlyArray<TuiPopover<any, any>>>([]),
});

/**
 * Grouping alerts by their component
 */
export const TUI_ALERTS_GROUPED = new InjectionToken(
    ngDevMode ? 'TUI_ALERTS_GROUPED' : '',
    {
        factory: () =>
            combineLatest([
                of(new Map<Type<any>, ReadonlyArray<TuiPopover<any, any>>>()),
                inject(TUI_ALERTS),
            ]).pipe(
                map(([map, alerts]) => {
                    map.forEach((_, key) => map.set(key, []));

                    alerts.forEach((alert) => {
                        const key = alert.component.component;
                        const value = map.get(key) || [];

                        map.set(key, [...value, alert]);
                    });

                    return Array.from(map.values());
                }),
            ),
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
