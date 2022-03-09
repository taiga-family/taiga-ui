import {Inject, Injectable} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk';
import {
    TuiNotificationOptions,
    TuiNotificationOptionsWithData,
} from '@taiga-ui/core/interfaces';
import {
    TUI_NOTIFICATION_OPTIONS,
    TuiNotificationDefaultOptions,
} from '@taiga-ui/core/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable, Observer} from 'rxjs';

import {NotificationAlert} from './notification-alert/notification-alert';
import {TuiNotificationContentContext} from './notification-content-context';
import {TuiSideDirection} from '@taiga-ui/core/types';

const NO_HOST =
    'Notifications are disabled, enable support by adding TuiNotificationsModule to your main app module';

type RecordType = Record<
    TuiSideDirection,
    BehaviorSubject<readonly NotificationAlert<any, any>[]>
>;

@Injectable({
    providedIn: 'root',
})
export class TuiNotificationsService {
    /** @internal */
    readonly items: RecordType = {
        'bottom-left': new BehaviorSubject<readonly NotificationAlert<any, any>[]>([]),
        'bottom-right': new BehaviorSubject<readonly NotificationAlert<any, any>[]>([]),
        'top-left': new BehaviorSubject<readonly NotificationAlert<any, any>[]>([]),
        'top-right': new BehaviorSubject<readonly NotificationAlert<any, any>[]>([]),
    };

    constructor(
        @Inject(TUI_NOTIFICATION_OPTIONS)
        readonly options: TuiNotificationDefaultOptions,
    ) {}

    show<O = void>(
        content: PolymorpheusContent<TuiNotificationContentContext<O>>,
    ): Observable<O>;
    show<O = void>(
        content: PolymorpheusContent<TuiNotificationContentContext<O>>,
        options: TuiNotificationOptions,
    ): Observable<O>;
    show<O, I>(
        content: PolymorpheusContent<TuiNotificationContentContext<O, I>>,
        options: TuiNotificationOptionsWithData<I>,
    ): Observable<O>;
    show<O, I>(
        content: PolymorpheusContent<TuiNotificationContentContext<O, I>>,
        options: TuiNotificationOptions | TuiNotificationOptionsWithData<I> = {},
    ): Observable<O> {
        return new Observable((observer: Observer<O>) => {
            const allOptions = {...this.options, ...options};
            const items$ = this.items[allOptions.direction];

            tuiAssert.assert(!!items$.observers.length, NO_HOST);

            const notification = new NotificationAlert(observer, content, allOptions);

            items$.next([...items$.value, notification]);

            return () => {
                items$.next(items$.value.filter(item => item !== notification));
            };
        });
    }
}
