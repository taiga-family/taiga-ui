import {TemplateRef} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';

import {TuiTreeItemComponent} from '../components/tree-item/tree-item.component';

export interface TuiTreeItemContext extends TuiContextWithImplicit<TuiTreeItemComponent> {
    readonly template: TemplateRef<Record<string, unknown>>;
}

export interface TuiTreeContext<T> extends TuiContextWithImplicit<T> {
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
    loadChildren(item: T): Observable<T[]>;
    hasChildren(item: T): boolean;
}
