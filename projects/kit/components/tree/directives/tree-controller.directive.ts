import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {tuiIsPresent, tuiProvide} from '@taiga-ui/cdk';

import type {TuiTreeItem} from '../components/tree-item/tree-item.component';
import type {TuiTreeAccessor, TuiTreeController} from '../misc/tree.interfaces';
import {TUI_TREE_ACCESSOR, TUI_TREE_CONTROLLER} from '../misc/tree.tokens';

@Directive({
    standalone: true,
    selector: '[tuiTreeController][map]',
    providers: [
        tuiProvide(TUI_TREE_ACCESSOR, TuiTreeControllerDirective),
        tuiProvide(TUI_TREE_CONTROLLER, TuiTreeControllerDirective),
    ],
    exportAs: 'tuiTreeController',
})
export class TuiTreeControllerDirective<T>
    implements TuiTreeController, TuiTreeAccessor<T>
{
    protected readonly items = new Map<TuiTreeItem, T>();

    @Input('tuiTreeController')
    public fallback = true;

    @Input()
    public map = new Map<T, boolean>();

    @Output()
    public readonly toggled = new EventEmitter<T>();

    public register(item: TuiTreeItem, value: T): void {
        this.items.set(item, value);
    }

    public unregister(item: TuiTreeItem): void {
        this.items.delete(item);
    }

    public isExpanded(item: TuiTreeItem): boolean {
        const value = this.items.get(item);

        return (value && this.map.get(value)) ?? this.fallback;
    }

    public toggle(item: TuiTreeItem): void {
        const value = this.items.get(item);
        const expanded = this.isExpanded(item);

        if (!tuiIsPresent(value)) {
            return;
        }

        this.toggled.emit(value);
        this.map.set(value, !expanded);
    }
}
