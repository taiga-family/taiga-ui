import type {Type} from '@angular/core';
import {inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {
    tuiCreateToken,
    tuiCreateTokenFromFactory,
} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/components/notification';
import {BehaviorSubject, combineLatest, map, of} from 'rxjs';

import type {TuiAlertOptions} from './alert.interfaces';

export const TUI_ALERT_DEFAULT_OPTIONS: Omit<TuiAlertOptions, 'icon' | 'status'> = {
    autoClose: 3000,
    label: '',
    closeable: true,
    data: undefined,
};

export const TUI_ALERT_OPTIONS = tuiCreateTokenFromFactory<TuiAlertOptions>(() => ({
    ...TUI_ALERT_DEFAULT_OPTIONS,
    ...inject(TUI_NOTIFICATION_OPTIONS),
}));

export const TUI_ALERT_POSITION = tuiCreateTokenFromFactory<string>(() =>
    inject(TUI_IS_MOBILE) ? '1rem 1rem 0 auto' : '2rem 3rem 0 auto',
);

export const TUI_ALERTS = tuiCreateToken(
    new BehaviorSubject<ReadonlyArray<TuiPopover<any, any>>>([]),
);

/**
 * Grouping alerts by their component
 */
export const TUI_ALERTS_GROUPED = tuiCreateTokenFromFactory(() =>
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
);
