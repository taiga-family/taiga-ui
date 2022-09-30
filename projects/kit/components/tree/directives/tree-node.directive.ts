import {Directive, Inject, Input, OnDestroy, Optional} from '@angular/core';

import {TuiTreeItemComponent} from '../components/tree-item/tree-item.component';
import {TuiTreeAccessor} from '../misc/tree.interfaces';
import {TUI_TREE_ACCESSOR} from '../misc/tree.tokens';

@Directive({
    selector: `tui-tree-item[tuiTreeNode]`,
})
export class TuiTreeNodeDirective<T> implements OnDestroy {
    @Input(`tuiTreeNode`)
    set value(value: T) {
        this.directive?.register(this.component, value);
    }

    constructor(
        @Optional()
        @Inject(TUI_TREE_ACCESSOR)
        private readonly directive: TuiTreeAccessor<T>,
        @Inject(TuiTreeItemComponent)
        private readonly component: TuiTreeItemComponent,
    ) {}

    ngOnDestroy(): void {
        this.directive?.unregister(this.component);
    }
}
