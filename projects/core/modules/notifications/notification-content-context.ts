import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core/enums';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiNotificationContentContext<O = void, I = undefined>
    extends TuiContextWithImplicit<TuiNotification> {
    label: PolymorpheusContent<TuiContextWithImplicit<TuiNotification>>;
    data: I;
    closeHook: () => void;
    emitHook: (data: O) => void;
    emitAndCloseHook: (data: O) => void;
}
