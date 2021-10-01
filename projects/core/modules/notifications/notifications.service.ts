import {Inject, Injectable} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk';
import {
    TuiNotificationOptions,
    TuiNotificationOptionsWithData,
} from '@taiga-ui/core/interfaces';
import {NotificationTokenOptions, TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable, Observer} from 'rxjs';
import {NotificationAlert} from './notification-alert/Notification-alert';
import {TuiNotificationContentContext} from './notification-content-context';

const NO_HOST =
    'Notifications are disabled, enable support by adding TuiNotificationsModule to your main app module';

@Injectable({
    providedIn: 'root',
})
export class TuiNotificationsService {
    /** @internal */
    readonly items$ = new BehaviorSubject<ReadonlyArray<NotificationAlert<any, any>>>([]);

    constructor(
        @Inject(TUI_NOTIFICATION_OPTIONS)
        public readonly options: NotificationTokenOptions,
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
            tuiAssert.assert(!!this.items$.observers.length, NO_HOST);

            const notification = new NotificationAlert(observer, content, {
                ...this.options,
                ...options,
            });

            this.items$.next([...this.items$.value, notification]);

            return () => {
                this.items$.next(this.items$.value.filter(item => item !== notification));
            };
        });
    }
}
