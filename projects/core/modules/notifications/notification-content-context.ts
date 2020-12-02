import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core/enums';

export interface TuiNotificationContentContext<O = void, I = undefined>
    extends TuiContextWithImplicit<TuiNotification> {
    label: string;
    data: I;
    closeHook: () => void;
    emitHook: (data: O) => void;
    emitAndCloseHook: (data: O) => void;
}
