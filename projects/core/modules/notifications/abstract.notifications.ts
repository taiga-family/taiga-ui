import {Injectable} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk/classes';
import {
    TuiNotificationOptions,
    TuiNotificationOptionsWithData,
} from '@taiga-ui/core/interfaces';
import {TuiNotificationDefaultOptions} from '@taiga-ui/core/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable, Observer} from 'rxjs';

import {NotificationAlert} from './notification-alert/Notification-alert';
import {TuiNotificationContentContext} from './notification-content-context';

const NO_HOST =
    'Notifications are disabled, enable support by adding TuiNotificationsModule to your main app module';

@Injectable()
export abstract class AbstractTuiNotificationsService<
    T extends TuiNotificationDefaultOptions,
    O = any,
    I = any,
> extends Observable<readonly NotificationAlert<O, I>[]> {
    abstract component: PolymorpheusContent;
    protected abstract readonly defaultOptions: T;

    readonly items$ = new BehaviorSubject<readonly NotificationAlert<O, I>[]>([]);

    protected constructor() {
        super(observer => this.items$.subscribe(observer));
    }

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

            const notification = new NotificationAlert<any, any>(observer, content, {
                ...this.defaultOptions,
                ...options,
            });

            this.items$.next([...this.items$.value, notification]);

            return () => {
                this.items$.next(this.items$.value.filter(item => item !== notification));
            };
        });
    }
}
