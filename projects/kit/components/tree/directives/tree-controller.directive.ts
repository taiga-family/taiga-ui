import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {tuiIsPresent} from '@taiga-ui/cdk';

import {type TuiTreeItemComponent} from '../components/tree-item/tree-item.component';
import {type TuiTreeAccessor, type TuiTreeController} from '../misc/tree.interfaces';
import {TUI_TREE_ACCESSOR, TUI_TREE_CONTROLLER} from '../misc/tree.tokens';

@Directive({
    selector: '[tuiTreeController][map]',
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
    exportAs: 'tuiTreeController',
})
export class TuiTreeControllerDirective<T>
    implements TuiTreeController, TuiTreeAccessor<T>
{
    @Input('tuiTreeController')
    public fallback = true;

    @Input()
    public map = new Map<T, boolean>();

    @Output()
    public readonly toggled = new EventEmitter<T>();

    protected readonly items = new Map<TuiTreeItemComponent, T>();

    public register(item: TuiTreeItemComponent, value: T): void {
        this.items.set(item, value);
    }

    public unregister(item: TuiTreeItemComponent): void {
        this.items.delete(item);
    }

    public isExpanded(item: TuiTreeItemComponent): boolean {
        const value = this.items.get(item);

        return (value && this.map.get(value)) ?? this.fallback;
    }

    public toggle(item: TuiTreeItemComponent): void {
        const value = this.items.get(item);
        const expanded = this.isExpanded(item);

        if (!tuiIsPresent(value)) {
            return;
        }

        this.toggled.emit(value);
        this.map.set(value, !expanded);
    }
}
