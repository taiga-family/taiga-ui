import {Directive} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk';
import {
    NotificationAlert,
    TuiNotificationContentContext,
    TuiNotificationDefaultOptions,
    TuiNotificationGroupService,
    TuiNotificationOptions,
    TuiNotificationOptionsWithData,
} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable, Observer} from 'rxjs';

import {TuiNotificationGroupComponent} from './notification-group/notification-group.component';
import {TuiNotificationItemComponent} from './notification-item/notification-item.component';

const NO_HOST =
    'Notifications are disabled, enable support by adding TuiNotificationsModule to your main app module';

@Directive()
export abstract class AbstractTuiNotificationsGroupService<
        T extends TuiNotificationDefaultOptions = TuiNotificationDefaultOptions,
    >
    extends Observable<readonly NotificationAlert<any, any>[]>
    implements TuiNotificationGroupService
{
    protected abstract readonly defaultOptions: T;

    readonly groupComponent: PolymorpheusContent<any> = new PolymorpheusComponent(
        TuiNotificationGroupComponent,
    );

    readonly itemComponent: PolymorpheusContent<any> = new PolymorpheusComponent(
        TuiNotificationItemComponent,
    );

    readonly items$ = new BehaviorSubject<readonly NotificationAlert<any, any>[]>([]);

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

            const allOptions = {...this.defaultOptions, ...options};
            const notification = new NotificationAlert(observer, content, allOptions);

            this.items$.next([...this.items$.value, notification]);

            return () => {
                this.items$.next(this.items$.value.filter(item => item !== notification));
            };
        });
    }
}
