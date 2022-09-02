import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observer} from 'rxjs';

import type {TuiBaseDialogContext} from './base-dialog-context';

export interface TuiBaseDialog<O, I extends TuiBaseDialogContext<O>> {
    readonly content: PolymorpheusContent<I>;
    readonly observer: Observer<O>;
}
