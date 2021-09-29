import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observer} from 'rxjs';
import {TuiSheetOptions} from './sheet-options';

export interface TuiSheet<O, I = undefined>
    extends TuiSheetOptions<I>,
        TuiContextWithImplicit<Observer<O>> {
    readonly content: PolymorpheusContent<TuiSheetOptions>;
    completeWith(value: O): void;
}
