import type {OnDestroy} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';

import {TuiTreeItem} from '../components/tree-item/tree-item.component';
import type {TuiTreeAccessor} from '../misc/tree.interfaces';
import {TUI_TREE_ACCESSOR} from '../misc/tree.tokens';

@Directive({
    standalone: true,
    selector: 'tui-tree-item[tuiTreeNode]',
})
export class TuiTreeNode<T> implements OnDestroy {
    private readonly component = inject(TuiTreeItem);
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
