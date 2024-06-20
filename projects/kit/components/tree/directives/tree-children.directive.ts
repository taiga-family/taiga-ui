import {Directive, Input} from '@angular/core';
import {EMPTY_ARRAY} from '@taiga-ui/cdk/constants';
import type {TuiHandler} from '@taiga-ui/cdk/types';

@Directive({
    standalone: true,
    selector: 'tui-tree[childrenHandler]',
})
export class TuiTreeChildren<T> {
    @Input()
    public childrenHandler: TuiHandler<T, readonly T[]> = TuiTreeChildren.defaultHandler;

    public static defaultHandler<G>(item: G): readonly G[] {
        return Array.isArray(item) ? item : EMPTY_ARRAY;
    }
}
