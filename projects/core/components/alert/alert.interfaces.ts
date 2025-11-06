import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {type TuiNotificationOptions} from '@taiga-ui/core/components/notification';
import {type TuiPositionOptions} from '@taiga-ui/core/directives';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiAlertOptions<I = undefined>
    extends Omit<TuiNotificationOptions, 'size'>,
        TuiPositionOptions {
    readonly autoClose: TuiHandler<string, number> | number;
    readonly data: I;
    readonly closable: boolean;
    readonly label: PolymorpheusContent<TuiAlertOptions<I>>;
}

export type TuiAlertContext<O = void, I = undefined> = TuiPortalContext<
    TuiAlertOptions<I>,
    O
>;
