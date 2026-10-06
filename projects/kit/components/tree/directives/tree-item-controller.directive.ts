import {Directive, input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

import {type TuiTreeItem} from '../components/tree-item/tree-item.component';
import {type TuiTreeAccessor, type TuiTreeController} from '../misc/tree.interfaces';
import {TUI_TREE_ACCESSOR, TUI_TREE_CONTROLLER} from '../misc/tree.tokens';

@Directive({
    selector: '[tuiTreeController]:not([map])',
    providers: [
        tuiProvide(TUI_TREE_ACCESSOR, TuiTreeItemController),
        tuiProvide(TUI_TREE_CONTROLLER, TuiTreeItemController),
    ],
    exportAs: 'tuiTreeController',
})
export class TuiTreeItemController
    implements TuiTreeController, TuiTreeAccessor<unknown>
{
    private readonly map = new WeakMap<TuiTreeItem, boolean>();
    private readonly items = new WeakMap<TuiTreeItem, TreeState>();
    private readonly state = new TreeState();

    public readonly fallback = input(true, {alias: 'tuiTreeController'});

    public register(
        item: TuiTreeItem,
        value: unknown,
        parent: TuiTreeItem | null = null,
    ): void {
        const state = (parent && this.items.get(parent)) || this.state;

        this.items.set(item, state.get(value, this.items.get(item)));
    }

    public unregister(item: TuiTreeItem): void {
        this.items.delete(item);
    }

    public isExpanded(item: TuiTreeItem): boolean {
        return this.items.get(item)?.expanded ?? this.map.get(item) ?? this.fallback();
    }

    public toggle(item: TuiTreeItem): void {
        const state = this.items.get(item);
        const expanded = !this.isExpanded(item);

        if (state) {
            state.expanded = expanded;
        } else {
            this.map.set(item, expanded);
        }
    }
}

class TreeState {
    private readonly references = new WeakMap<object, TreeState>();
    private readonly keys = new Map<unknown, object>();

    public expanded?: boolean;

    public get(value: unknown, previous?: TreeState): TreeState {
        const key = this.getKey(value);
        const state = previous || this.references.get(key) || new TreeState();

        this.references.set(key, state);

        return state;
    }

    private getKey(value: unknown): object {
        if (
            (typeof value === 'object' && value !== null) ||
            typeof value === 'function'
        ) {
            return value;
        }

        const key = this.keys.get(value) || {};

        this.keys.set(value, key);

        return key;
    }
}
