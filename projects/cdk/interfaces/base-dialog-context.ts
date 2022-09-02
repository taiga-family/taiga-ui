import type {Observer} from 'rxjs';

import type {TuiAriaDialogContext} from './aria-dialog-context';
import type {TuiContextWithImplicit} from './context-with-implicit';

export interface TuiBaseDialogContext<O>
    extends TuiContextWithImplicit<Observer<O>>,
        TuiAriaDialogContext {
    readonly completeWith: (value: O) => void;
}
