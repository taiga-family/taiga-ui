import {Directive, Input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

import type {TuiTreeItem} from '../components/tree-item/tree-item.component';
import type {TuiTreeController} from '../misc/tree.interfaces';
import {TUI_TREE_CONTROLLER} from '../misc/tree.tokens';

@Directive({
    standalone: true,
    selector: '[tuiTreeController]:not([map])',
    providers: [tuiProvide(TUI_TREE_CONTROLLER, TuiTreeItemController)],
    exportAs: 'tuiTreeController',
})
export class TuiTreeItemController implements TuiTreeController {
    private readonly map = new WeakMap<TuiTreeItem, boolean>();

    @Input('tuiTreeController')
    public fallback = true;

    public isExpanded(item: TuiTreeItem): boolean {
        return this.map.get(item) ?? this.fallback;
    }

    public toggle(item: TuiTreeItem): void {
        this.map.set(item, !this.isExpanded(item));
    }
}
