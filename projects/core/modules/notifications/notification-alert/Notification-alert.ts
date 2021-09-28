import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observer} from 'rxjs';
import {TuiNotificationContentContext} from '../notification-content-context';
import {
    TuiNotificationOptions,
    TuiNotificationOptionsWithData,
} from '../notification-options';

export class NotificationAlert<O, I> {
    readonly status = this.options.status;

    readonly hasIcon = this.options.hasIcon;

    readonly autoClose: boolean | number;

    readonly hasCloseButton = this.options.hasCloseButton;

    readonly label = this.options.label;

    readonly data!: I;

    constructor(
        readonly observer: Observer<O>,
        readonly content: PolymorpheusContent<TuiNotificationContentContext<O, I>>,
        private readonly options: Required<
            TuiNotificationOptions | TuiNotificationOptionsWithData<I>
        >,
    ) {
        this.autoClose =
            typeof this.options.autoClose === 'function'
                ? this.options.autoClose(this.options.status)
                : this.options.autoClose;

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
