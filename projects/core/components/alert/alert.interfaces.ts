import type {TuiPopoverContext} from '@taiga-ui/cdk/services';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import type {
    TuiNotificationOptions,
    TuiNotificationStatus,
} from '@taiga-ui/core/components/notification';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export type TuiAlertAutoClose = TuiHandler<TuiNotificationStatus, number> | number;

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
