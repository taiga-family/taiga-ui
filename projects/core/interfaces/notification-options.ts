import {TuiNotification} from '@taiga-ui/core/enums';
import {TuiNotificationDefaultOptions} from '@taiga-ui/core/tokens/notification-options';

export type TuiNotificationAutoClose =
    | boolean
    | number
    | ((status: TuiNotification) => number | boolean);

export type TuiNotificationOptions = Partial<
    Omit<TuiNotificationDefaultOptions, 'defaultAutoCloseTime'>
>;

export interface TuiNotificationOptionsWithData<I> extends TuiNotificationOptions {
    readonly data: I;
}
