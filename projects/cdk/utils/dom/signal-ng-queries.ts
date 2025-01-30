import type {QueryList, Signal} from '@angular/core';
import {afterNextRender, computed, DestroyRef, inject, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiQueryListChanges} from '@taiga-ui/cdk/observables';

/**
 * @deprecated use `contentChildren` from `@angular/core`
 * TODO: delete it after bumping Angular to 17+
 */
export function tuiContentChildren<T>(
    queryListFactory: () => QueryList<T>,
): Signal<readonly T[]> {
    const destroyRef = inject(DestroyRef);
    const internalSignal = signal<readonly T[]>([]);

    afterNextRender(() => {
        tuiQueryListChanges(queryListFactory())
            .pipe(takeUntilDestroyed(destroyRef))
            .subscribe((x) => internalSignal.set(x));
    });

    return internalSignal;
}

/**
 * @deprecated use `contentChild` from `@angular/core`
 * TODO: delete it after bumping Angular to 17+
 */
export function tuiContentChild<T>(
    queryListFactory: () => QueryList<T>,
): Signal<T | undefined> {
    const children = tuiContentChildren(queryListFactory);

    return computed(() => children()[0]);
}
