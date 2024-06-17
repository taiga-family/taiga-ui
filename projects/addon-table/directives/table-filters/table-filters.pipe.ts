import type {PipeTransform, Signal} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {TuiObservablePipe, tuiPure} from '@taiga-ui/cdk';

import {TuiTableFiltersDirective} from './table-filters.directive';

@Pipe({
    standalone: true,
    name: 'tuiTableFilters',
    pure: false,
})
export class TuiTableFiltersPipe<T> extends TuiObservablePipe implements PipeTransform {
    private readonly filters = inject(TuiTableFiltersDirective<T>);

    public transform(items: readonly T[]): readonly T[] {
        return this.getSignal(items)();
    }

    @tuiPure
    private getSignal(items: readonly T[]): Signal<readonly T[]> {
        return this.toSignal(this.filters.filter(items), []);
    }
}
