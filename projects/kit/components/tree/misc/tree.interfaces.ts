import {type TemplateRef} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk';
import {type Observable} from 'rxjs';

import {type TuiTreeItemComponent} from '../components/tree-item/tree-item.component';

export interface TuiTreeItemContext extends TuiContext<TuiTreeItemComponent> {
    readonly template: TemplateRef<Record<string, unknown>>;
}

export interface TuiTreeContext<T> extends TuiContext<T> {
    readonly node: TuiTreeItemComponent;
}

export interface TuiTreeController {
    isExpanded(item: TuiTreeItemComponent): boolean;
    toggle(item: TuiTreeItemComponent): void;
}

export interface TuiTreeAccessor<T> {
    register(item: TuiTreeItemComponent, value: T): void;
    unregister(item: TuiTreeItemComponent): void;
}

export interface TuiTreeLoader<T> {
    hasChildren(item: T): boolean;
    loadChildren(item: T): Observable<T[]>;
}
