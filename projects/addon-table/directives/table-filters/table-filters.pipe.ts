import type {PipeTransform, Signal} from '@angular/core';
import {inject, INJECTOR, Pipe, untracked} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiPure} from '@taiga-ui/cdk';
import {Subject, takeUntil} from 'rxjs';

import {TuiTableFiltersDirective} from './table-filters.directive';

@Pipe({
    standalone: true,
    name: 'tuiTableFilters',
    pure: false,
})
export class TuiTableFiltersPipe<T> implements PipeTransform {
    private readonly filters = inject(TuiTableFiltersDirective<T>);
    private readonly destroy$ = new Subject<void>();
    private readonly injector = inject(INJECTOR);

    public transform(items: readonly T[]): readonly T[] {
        return this.getSignal(items)();
    }

    @tuiPure
    private getSignal(items: readonly T[]): Signal<readonly T[]> {
        this.destroy$.next();

        return untracked(() =>
            toSignal(this.filters.filter(items).pipe(takeUntil(this.destroy$)), {
                injector: this.injector,
                initialValue: [],
            }),
        );
    }
}
