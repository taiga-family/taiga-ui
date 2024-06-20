import type {TemplateRef} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import type {Observable} from 'rxjs';

import type {TuiTreeItem} from '../components/tree-item/tree-item.component';

export interface TuiTreeItemContext extends TuiContext<TuiTreeItem> {
    readonly template: TemplateRef<Record<string, unknown>>;
}

export interface TuiTreeContext<T> extends TuiContext<T> {
    readonly node: TuiTreeItem;
}

export interface TuiTreeController {
    isExpanded(item: TuiTreeItem): boolean;
    toggle(item: TuiTreeItem): void;
}

export interface TuiTreeAccessor<T> {
    register(item: TuiTreeItem, value: T): void;
    unregister(item: TuiTreeItem): void;
}

export interface TuiTreeLoader<T> {
    hasChildren(item: T): boolean;
    loadChildren(item: T): Observable<T[]>;
}
