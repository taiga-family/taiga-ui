import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable, Observer} from 'rxjs';
import {TuiSheetOptions} from './sheet-options';

export interface TuiSheet<O, I = undefined>
    extends TuiSheetOptions<I>,
        TuiContextWithImplicit<Observer<O>> {
    readonly content: PolymorpheusContent<TuiSheet<O, I>>;
    readonly scroll$: Observable<number>;
    completeWith(value: O): void;
}
