import {TuiContextWithImplicit} from '@taiga-ui/cdk/interfaces';
import {TuiNotification} from '@taiga-ui/core/enums';
import {NotificationAlert, TuiNotificationContentContext} from '@taiga-ui/core/modules';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable} from 'rxjs';

export type TuiNotificationAutoClose =
    | boolean
    | number
    | ((status: TuiNotification) => number | boolean);

export interface TuiNotificationOptions {
    readonly label?: PolymorpheusContent<TuiContextWithImplicit<TuiNotification>>;
    readonly status?: TuiNotification;
    readonly hasIcon?: boolean;
    readonly autoClose?: TuiNotificationAutoClose;
    readonly hasCloseButton?: boolean;
}

export interface TuiNotificationOptionsWithData<I> extends TuiNotificationOptions {
    readonly data: I;
}

export interface TuiNotificationGroupService {
    items$: BehaviorSubject<readonly NotificationAlert<any, any>[]>;
    groupComponent: PolymorpheusContent<any>;
    itemComponent: PolymorpheusContent<any>;

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
        options: TuiNotificationOptions | TuiNotificationOptionsWithData<I>,
    ): Observable<O>;
}
