import {Directive, Input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk';

import type {TuiTreeItemComponent} from '../components/tree-item/tree-item.component';
import type {TuiTreeController} from '../misc/tree.interfaces';
import {TUI_TREE_CONTROLLER} from '../misc/tree.tokens';

@Directive({
    selector: '[tuiTreeController]:not([map])',
    providers: [tuiProvide(TUI_TREE_CONTROLLER, TuiTreeItemControllerDirective)],
    exportAs: 'tuiTreeController',
})
export class TuiTreeItemControllerDirective implements TuiTreeController {
    private readonly map = new WeakMap<TuiTreeItemComponent, boolean>();

    @Input('tuiTreeController')
    public fallback = true;

    public isExpanded(item: TuiTreeItemComponent): boolean {
        return this.map.get(item) ?? this.fallback;
    }

    public toggle(item: TuiTreeItemComponent): void {
        this.map.set(item, !this.isExpanded(item));
    }
}
