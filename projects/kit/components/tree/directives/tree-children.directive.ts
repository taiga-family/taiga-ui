import {Directive, Input} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk';
import {EMPTY_ARRAY} from '@taiga-ui/cdk';

@Directive({
    selector: 'tui-tree[childrenHandler]',
})
export class TuiTreeChildrenDirective<T> {
    @Input()
    public childrenHandler: TuiHandler<T, readonly T[]> =
        TuiTreeChildrenDirective.defaultHandler;

    public static defaultHandler<G>(item: G): readonly G[] {
        return Array.isArray(item) ? item : EMPTY_ARRAY;
    }
}
