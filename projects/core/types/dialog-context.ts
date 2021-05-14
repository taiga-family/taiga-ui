import {TuiBaseDialogContext} from '@taiga-ui/cdk';
import {TuiDialogOptions} from './dialog-options';

export type TuiDialogContext<O = void, I = undefined> = TuiBaseDialogContext<O> &
    TuiDialogOptions<I>;
