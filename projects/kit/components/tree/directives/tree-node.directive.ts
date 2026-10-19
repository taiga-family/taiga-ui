import {Directive, inject, input, type OnChanges, type OnDestroy} from '@angular/core';

import {TuiTreeItem} from '../components/tree-item/tree-item.component';
import {type TuiTreeAccessor} from '../misc/tree.interfaces';
import {TUI_TREE_ACCESSOR} from '../misc/tree.tokens';

@Directive({selector: 'tui-tree-item[tuiTreeNode]'})
export class TuiTreeNode<T> implements OnChanges, OnDestroy {
    private readonly component = inject(TuiTreeItem);
    private readonly parent = inject(TuiTreeItem, {skipSelf: true, optional: true});

    private readonly directive = inject<TuiTreeAccessor<T>>(TUI_TREE_ACCESSOR, {
        optional: true,
    });

    public readonly value = input.required<T>({alias: 'tuiTreeNode'});

    public ngOnChanges(): void {
        this.directive?.register(this.component, this.value(), this.parent);
        this.component.checkChanges();
    }

    public ngOnDestroy(): void {
        this.directive?.unregister(this.component);
    }
}
