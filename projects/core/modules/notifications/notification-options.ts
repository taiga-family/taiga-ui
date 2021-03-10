import {TuiNotification} from '@taiga-ui/core/enums';

export interface TuiNotificationOptions {
    readonly label?: string;
    readonly status?: TuiNotification;
    readonly hasIcon?: boolean;
    readonly autoClose?: boolean;
    readonly hasCloseButton?: boolean;
}

export interface TuiNotificationOptionsWithData<I> extends TuiNotificationOptions {
    readonly data: I;
}
