import {TuiContextWithImplicit, TuiHandler} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core/enums';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TuiNotificationT} from '@taiga-ui/core/types';

export type TuiAlertAutoClose =
    | TuiHandler<TuiNotification | TuiNotificationT, boolean | number>
    | boolean
    | number;

export interface TuiAlertOptions<I> {
    readonly label: PolymorpheusContent<TuiAlertOptions<I>>;
    readonly status: TuiNotification | TuiNotificationT;
    readonly icon: PolymorpheusContent<TuiContextWithImplicit<TuiNotificationT>>;
    readonly autoClose: TuiAlertAutoClose;
    readonly hasCloseButton: boolean;
    readonly data: I;
    /** @deprecated use icon instead **/
    readonly hasIcon: boolean;
    /** @deprecated use autoClose instead **/
    readonly defaultAutoCloseTime: number;
}
