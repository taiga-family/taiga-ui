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

    readonly autoClose = this.options.autoClose;

    readonly hasCloseButton = this.options.hasCloseButton;

    readonly label = this.options.label;

    readonly data!: I;

    readonly observer: Observer<O>;

    readonly content: PolymorpheusContent<TuiNotificationContentContext<O, I>>;

    constructor(
        observer: Observer<O>,
        content: PolymorpheusContent<TuiNotificationContentContext<O, I>>,
        private readonly options: Required<
            TuiNotificationOptions | TuiNotificationOptionsWithData<I>
        >,
    ) {
        this.observer = observer;
        this.content = content;

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
