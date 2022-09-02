import {Directive, Input} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk';
import {EMPTY_ARRAY, tuiDefaultProp} from '@taiga-ui/cdk';

@Directive({
    selector: `tui-tree[childrenHandler]`,
})
export class TuiTreeChildrenDirective<T> {
    @Input()
    @tuiDefaultProp()
    childrenHandler: TuiHandler<T, readonly T[]> =
        TuiTreeChildrenDirective.defaultHandler;

    static defaultHandler<G>(item: G): readonly G[] {
        return Array.isArray(item) ? item : EMPTY_ARRAY;
    }
}
