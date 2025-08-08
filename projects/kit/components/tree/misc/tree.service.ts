import {inject, Injectable} from '@angular/core';
import {map, mergeMap, startWith, Subject, tap} from 'rxjs';

import {type TuiTreeLoader} from './tree.interfaces';
import {TUI_TREE_LOADER, TUI_TREE_LOADING, TUI_TREE_START} from './tree.tokens';

@Injectable()
export class TuiTreeService<T> {
    private readonly loading = inject<T>(TUI_TREE_LOADING);
    private readonly start = inject<T>(TUI_TREE_START);
    private readonly loader = inject<TuiTreeLoader<T>>(TUI_TREE_LOADER);
    private readonly map = new Map<T, readonly T[]>([[this.loading, []]]);
    private readonly load$ = new Subject<T>();

    public readonly data$ = this.load$.pipe(
        mergeMap((item) =>
            this.loader.loadChildren(item).pipe(
                tap((children) => this.map.set(item, children)),
                map((children) =>
                    children.filter((item) => !this.loader.hasChildren(item)),
                ),
                tap((children) => children.forEach((child) => this.map.set(child, []))),
            ),
        ),
        startWith(null),
        map(() => this.start),
    );

    public getChildren(item: T): readonly T[] {
        return this.map.get(item) || [this.loading];
    }

    public loadChildren(item: T): void {
        if (this.map.get(item)) {
            return;
        }

        this.map.set(item, [this.loading]);
        this.load$.next(item);
    }
}
