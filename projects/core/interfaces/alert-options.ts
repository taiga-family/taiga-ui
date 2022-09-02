import type {TuiContextWithImplicit, TuiHandler} from '@taiga-ui/cdk';
import type {TuiNotification} from '@taiga-ui/core/enums';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export type TuiAlertAutoClose =
    | boolean
    | number
    | TuiHandler<TuiNotification, number | boolean>;

export interface TuiAlertOptions<I> {
    readonly label: PolymorpheusContent<TuiContextWithImplicit<TuiNotification>>;
    readonly status: TuiNotification;
    readonly hasIcon: boolean;
    readonly autoClose: TuiAlertAutoClose;
    readonly hasCloseButton: boolean;
    readonly data: I;
}
