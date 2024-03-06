import type {OnDestroy} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';

import {TuiTreeItemComponent} from '../components/tree-item/tree-item.component';
import type {TuiTreeAccessor} from '../misc/tree.interfaces';
import {TUI_TREE_ACCESSOR} from '../misc/tree.tokens';

@Directive({
    selector: 'tui-tree-item[tuiTreeNode]',
})
export class TuiTreeNodeDirective<T> implements OnDestroy {
    private readonly component = inject(TuiTreeItemComponent);
    private readonly directive = inject<TuiTreeAccessor<T>>(TUI_TREE_ACCESSOR, {
        optional: true,
    });

    @Input('tuiTreeNode')
    public set value(value: T) {
        this.directive?.register(this.component, value);
    }

    public ngOnDestroy(): void {
        this.directive?.unregister(this.component);
    }
}
