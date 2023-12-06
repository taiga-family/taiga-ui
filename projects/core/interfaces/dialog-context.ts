import {TuiBaseDialogContext} from '@taiga-ui/cdk';

import {TuiDialogOptions} from './dialog-options';

export interface TuiDialogContext<O = void, I = any>
    extends TuiBaseDialogContext<O>,
        TuiDialogOptions<I> {}
