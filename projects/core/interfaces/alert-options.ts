import {TuiContext, TuiHandler} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core/enums';
import {TuiNotificationT} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export type TuiAlertAutoClose =
    | TuiHandler<TuiNotification | TuiNotificationT, boolean | number>
    | boolean
    | number;

export interface TuiAlertOptions<I> {
    readonly autoClose: TuiAlertAutoClose;
    readonly data: I;
    /** @deprecated use autoClose instead **/
    readonly defaultAutoCloseTime: number;
    readonly hasCloseButton: boolean;
    /** @deprecated use icon instead **/
    readonly hasIcon: boolean;
    readonly icon: PolymorpheusContent<TuiContext<TuiNotificationT>>;
    readonly label: PolymorpheusContent<TuiAlertOptions<I>>;
    readonly status: TuiNotification | TuiNotificationT;
}
