import {Directive, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

import {TuiTreeItemComponent} from '../components/tree-item/tree-item.component';
import {TuiTreeController} from '../misc/tree.interfaces';
import {TUI_TREE_CONTROLLER} from '../misc/tree.tokens';

@Directive({
    selector: '[tuiTreeController]:not([map])',
    exportAs: 'tuiTreeController',
    providers: [
        {
            provide: TUI_TREE_CONTROLLER,
            useExisting: TuiTreeItemControllerDirective,
        },
    ],
})
export class TuiTreeItemControllerDirective implements TuiTreeController {
    @Input('tuiTreeController')
    @tuiDefaultProp()
    fallback = true;

    private readonly map = new WeakMap<TuiTreeItemComponent, boolean>();

    isExpanded(item: TuiTreeItemComponent): boolean {
        return this.map.get(item) ?? this.fallback;
    }

    toggle(item: TuiTreeItemComponent) {
        this.map.set(item, !this.isExpanded(item));
    }
}
