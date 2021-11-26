import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observer} from 'rxjs';

import {TuiBaseDialogContext} from './base-dialog-context';

export interface TuiBaseDialog<O, I extends TuiBaseDialogContext<O>> {
    readonly content: PolymorpheusContent<I>;
    readonly observer: Observer<O>;
}
