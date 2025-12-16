import {Directive, input} from '@angular/core';
import {type TuiHandler} from '@taiga-ui/cdk/types';

@Directive({
    selector: 'tui-tree[childrenHandler]',
})
export class TuiTreeChildren<T> {
    public readonly childrenHandler = input<TuiHandler<T, readonly T[]>>(
        TuiTreeChildren.defaultHandler,
    );

    public static defaultHandler<G>(item: G): readonly G[] {
        return Array.isArray(item) ? item : [];
    }
}
