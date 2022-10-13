import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable, Observer} from 'rxjs';

import type {TuiSheetOptions} from './sheet-options';

export interface TuiSheet<O, I = undefined>
    extends TuiSheetOptions<I, O>,
        TuiContextWithImplicit<Observer<O>> {
    readonly content: PolymorpheusContent<TuiSheet<O, I>>;
    readonly scroll$: Observable<number>;
    completeWith(value: O): void;
}

export interface TuiSheetRequiredProps<T = unknown> {
    stops: readonly number[];
    item: TuiSheet<T>;
}
