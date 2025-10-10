import {inject, Injectable} from '@angular/core';
import {map, merge, mergeMap, startWith, Subject, tap} from 'rxjs';

import {type TuiTreeLoader} from './tree.interfaces';
import {TUI_TREE_LOADER, TUI_TREE_LOADING, TUI_TREE_START} from './tree.tokens';

@Injectable()
export class TuiTreeService<T> {
    private readonly loading = inject<T>(TUI_TREE_LOADING);
    private readonly start = inject<T>(TUI_TREE_START);
    private readonly loader = inject<TuiTreeLoader<T>>(TUI_TREE_LOADER);

    private map = new Map<T, readonly T[]>([[this.loading, []]]);

    private readonly load$ = new Subject<T>();
    private readonly reset$ = new Subject<void>();

    public readonly data$ = merge(
        this.load$.pipe(
            mergeMap((item) =>
                this.loader.loadChildren(item).pipe(
                    tap((children) => this.map.set(item, children)),
                    map((children) =>
                        children.filter((child) => !this.loader.hasChildren(child)),
                    ),
                    tap((children) =>
                        children.forEach((child) => this.map.set(child, [])),
                    ),
                    map(() => this.start),
                ),
            ),
        ),
        this.reset$.pipe(
            tap(() => {
                this.resetMap();
            }),
            map(() => this.start),
        ),
    ).pipe(startWith(this.start));

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

    public clear(): void {
        this.reset$.next();
    }

    private resetMap(): void {
        this.map = new Map<T, readonly T[]>([[this.loading, []]]);
    }
}
