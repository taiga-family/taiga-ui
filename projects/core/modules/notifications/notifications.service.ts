import {Injectable} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable, Observer} from 'rxjs';
import {NotificationAlert} from './notification-alert/Notification-alert';
import {TuiNotificationContentContext} from './notification-content-context';
import {
    TuiNotificationOptions,
    TuiNotificationOptionsWithData,
} from './notification-options';

const NO_HOST =
    'Notifications are disabled, enable support by adding TuiNotificationsModule to your main app module';

@Injectable({
    providedIn: 'root',
})
export class TuiNotificationsService {
    /** @internal */
    readonly items$ = new BehaviorSubject<ReadonlyArray<NotificationAlert<any, any>>>([]);

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

            const notification = new NotificationAlert(observer, content, options);

            this.items$.next([...this.items$.value, notification]);

            return () => {
                this.items$.next(this.items$.value.filter(item => item !== notification));
            };
        });
    }
}
