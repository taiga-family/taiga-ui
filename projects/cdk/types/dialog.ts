import {TuiBaseDialogContext} from '@taiga-ui/cdk/interfaces';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export type TuiDialog<T, O> = TuiBaseDialogContext<O> &
    T & {content: PolymorpheusContent<TuiBaseDialogContext<O> & T>};
