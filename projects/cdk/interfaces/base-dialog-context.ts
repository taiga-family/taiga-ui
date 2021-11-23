import {Observer} from 'rxjs';

import {TuiAriaDialogContext} from './aria-dialog-context';
import {TuiContextWithImplicit} from './context-with-implicit';

export interface TuiBaseDialogContext<O>
    extends TuiContextWithImplicit<Observer<O>>,
        TuiAriaDialogContext {
    readonly completeWith: (value: O) => void;
}
