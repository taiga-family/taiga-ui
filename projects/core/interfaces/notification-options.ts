import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core/enums';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

/** @deprecated use {@link TuiAlertAutoClose} from @taiga-ui/core */
export type TuiNotificationAutoClose =
    | boolean
    | number
    | ((status: TuiNotification) => number | boolean);

/** @deprecated use {@link TuiAlertOptions} from @taiga-ui/core */
export interface TuiNotificationOptions {
    readonly label?: PolymorpheusContent<TuiContextWithImplicit<TuiNotification>>;
    readonly status?: TuiNotification;
    readonly hasIcon?: boolean;
    readonly autoClose?: TuiNotificationAutoClose;
    readonly hasCloseButton?: boolean;
}

/** @deprecated use {@link TuiAlertOptions} from @taiga-ui/core */
export interface TuiNotificationOptionsWithData<I> extends TuiNotificationOptions {
    readonly data: I;
}
