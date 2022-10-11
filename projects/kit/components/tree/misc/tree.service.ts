import {Inject, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {map, mapTo, startWith, switchMap, tap} from 'rxjs/operators';

import {TUI_TREE_LOADER} from './tokens/tree-loader.token';
import {TUI_TREE_LOADING} from './tokens/tree-loading.token';
import {TUI_TREE_START} from './tokens/tree-start.token';
import {TuiTreeLoader} from './tree.interfaces';

@Injectable()
export class TuiTreeService<T> {
    private readonly map = new Map<T, readonly T[]>([[this.loading, []]]);

    private readonly load$ = new Subject<T>();

    readonly data$ = this.load$.pipe(
        switchMap(item =>
            this.loader.loadChildren(item).pipe(
                tap(children => this.map.set(item, children)),
                map(children => children.filter(item => !this.loader.hasChildren(item))),
                tap(children => children.forEach(child => this.map.set(child, []))),
            ),
        ),
        startWith(null),
        mapTo(this.start),
    );

    constructor(
        @Inject(TUI_TREE_LOADING) private readonly loading: T,
        @Inject(TUI_TREE_START) private readonly start: T,
        @Inject(TUI_TREE_LOADER) private readonly loader: TuiTreeLoader<T>,
    ) {}

    getChildren(item: T): readonly T[] {
        return this.map.get(item) || [this.loading];
    }

    loadChildren(item: T): void {
        if (this.map.get(item)) {
            return;
        }

        this.map.set(item, [this.loading]);
        this.load$.next(item);
    }
}
