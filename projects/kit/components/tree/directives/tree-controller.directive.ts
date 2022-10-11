import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {tuiDefaultProp, tuiIsPresent} from '@taiga-ui/cdk';

import {TuiTreeItemComponent} from '../components/tree-item/tree-item.component';
import {TUI_TREE_ACCESSOR} from '../misc/tokens/tree-accessor.token';
import {TUI_TREE_CONTROLLER} from '../misc/tokens/tree-controller.token';
import {TuiTreeAccessor, TuiTreeController} from '../misc/tree.interfaces';

@Directive({
    selector: `[tuiTreeController][map]`,
    exportAs: `tuiTreeController`,
    providers: [
        {
            provide: TUI_TREE_ACCESSOR,
            useExisting: TuiTreeControllerDirective,
        },
        {
            provide: TUI_TREE_CONTROLLER,
            useExisting: TuiTreeControllerDirective,
        },
    ],
})
export class TuiTreeControllerDirective<T>
    implements TuiTreeController, TuiTreeAccessor<T>
{
    @Input(`tuiTreeController`)
    @tuiDefaultProp()
    fallback = true;

    @Input()
    @tuiDefaultProp()
    map: Map<T, boolean> = new Map();

    @Output()
    readonly toggled = new EventEmitter<T>();

    readonly items = new Map<TuiTreeItemComponent, T>();

    register(item: TuiTreeItemComponent, value: T): void {
        this.items.set(item, value);
    }

    unregister(item: TuiTreeItemComponent): void {
        this.items.delete(item);
    }

    isExpanded(item: TuiTreeItemComponent): boolean {
        const value = this.items.get(item);

        return (value && this.map.get(value)) ?? this.fallback;
    }

    toggle(item: TuiTreeItemComponent): void {
        const value = this.items.get(item);
        const expanded = this.isExpanded(item);

        if (!tuiIsPresent(value)) {
            return;
        }

        this.toggled.emit(value);
        this.map.set(value, !expanded);
    }
}
