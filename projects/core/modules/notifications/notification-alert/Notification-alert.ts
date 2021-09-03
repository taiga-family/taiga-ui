import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core/enums';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observer} from 'rxjs';
import {TuiNotificationContentContext} from '../notification-content-context';
import {
    TuiNotificationOptions,
    TuiNotificationOptionsWithData,
} from '../notification-options';

export class NotificationAlert<O, I> {
    readonly status: TuiNotification | undefined;

    readonly hasIcon: boolean | undefined;

    readonly autoClose: boolean | number | undefined;

    readonly hasCloseButton: boolean | undefined;

    readonly label:
        | PolymorpheusContent<TuiContextWithImplicit<TuiNotification>>
        | undefined;

    readonly data!: I;

    readonly observer: Observer<O>;

    readonly content: PolymorpheusContent<TuiNotificationContentContext<O, I>>;

    constructor(
        observer: Observer<O>,
        content: PolymorpheusContent<TuiNotificationContentContext<O, I>>,
        options: TuiNotificationOptions | TuiNotificationOptionsWithData<I>,
    ) {
        const {label, status, hasIcon, autoClose, hasCloseButton} = options;

        this.observer = observer;
        this.content = content;

        this.label = label;
        this.status = status;
        this.hasIcon = hasIcon;
        this.autoClose = autoClose;
        this.hasCloseButton = hasCloseButton;

        if (options && this.withData(options)) {
            this.data = options.data;
        }
    }

    private withData(
        options: TuiNotificationOptions | TuiNotificationOptionsWithData<I>,
    ): options is TuiNotificationOptionsWithData<I> {
        return 'data' in options;
    }
}
