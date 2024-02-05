import {TuiHandler, TuiPopoverContext} from '@taiga-ui/cdk';
import {
    TuiNotification,
    TuiNotificationOptions,
} from '@taiga-ui/core/components/notification';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export type TuiAlertAutoClose = TuiHandler<TuiNotification, number> | number;

export interface TuiAlertOptions<I = undefined>
    extends Omit<TuiNotificationOptions, 'size'> {
    readonly autoClose: TuiAlertAutoClose;
    readonly data: I;
    readonly closeable: boolean;
    readonly label: PolymorpheusContent<TuiAlertOptions<I>>;
}

export interface TuiAlertContext<O = void, I = undefined>
    extends TuiPopoverContext<O>,
        TuiAlertOptions<I> {}
