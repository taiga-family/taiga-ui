import {Directive, Input} from '@angular/core';
import {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';

@Directive({
    selector: 'tui-tree[childrenHandler]',
})
export class TuiTreeChildrenDirective<T> {
    @Input()
    childrenHandler: TuiHandler<T, readonly T[]> =
        TuiTreeChildrenDirective.defaultHandler;

    static defaultHandler<G>(item: G): readonly G[] {
        return Array.isArray(item) ? item : EMPTY_ARRAY;
    }
}
