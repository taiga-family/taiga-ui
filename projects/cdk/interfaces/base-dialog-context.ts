import {Observer} from 'rxjs';

import {TuiAriaDialogContext} from './aria-dialog-context';
import {TuiContext} from './context-with-implicit';

export interface TuiBaseDialogContext<O>
    extends TuiContext<Observer<O>>,
        TuiAriaDialogContext {
    readonly completeWith: (value: O) => void;
}
