import {type TuiPopoverContext} from '@taiga-ui/cdk/services';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {type TuiNotificationOptions} from '@taiga-ui/core/components/notification';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiAlertOptions<I = undefined>
    extends Omit<TuiNotificationOptions, 'size'> {
    readonly autoClose: TuiHandler<string, number> | number;
    readonly data: I;
    readonly closable: boolean;
    readonly label: PolymorpheusContent<TuiAlertOptions<I>>;
    readonly position: 'bottom' | 'top';
    readonly orientation: 'center' | 'end' | 'start';
}

export interface TuiAlertContext<O = void, I = undefined>
    extends TuiPopoverContext<O>,
        TuiAlertOptions<I> {}
