import {Directive, input, output} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';

import {type TuiTreeItem} from '../components/tree-item/tree-item.component';
import {type TuiTreeAccessor, type TuiTreeController} from '../misc/tree.interfaces';
import {TUI_TREE_ACCESSOR, TUI_TREE_CONTROLLER} from '../misc/tree.tokens';

@Directive({
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

    public readonly fallback = input(true, {alias: 'tuiTreeController'});
    public readonly map = input(new Map<T, boolean>());
    public readonly toggled = output<T>();

    public register(item: TuiTreeItem, value: T): void {
        this.items.set(item, value);
    }

    public unregister(item: TuiTreeItem): void {
        this.items.delete(item);
    }

    public isExpanded(item: TuiTreeItem): boolean {
        const value = this.items.get(item);

        return (value && this.map().get(value)) ?? this.fallback();
    }

    public toggle(item: TuiTreeItem): void {
        const value = this.items.get(item);
        const expanded = this.isExpanded(item);

        if (!tuiIsPresent(value)) {
            return;
        }

        this.toggled.emit(value);
        this.map().set(value, !expanded);
    }
}
