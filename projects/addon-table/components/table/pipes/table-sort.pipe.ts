import {
    computed,
    inject,
    Pipe,
    type PipeTransform,
    signal,
    untracked,
} from '@angular/core';

import {TuiTableDirective} from '../directives/table.directive';

@Pipe({
    name: 'tuiTableSort',
    pure: false,
})
export class TuiTableSortPipe implements PipeTransform {
    private readonly table = inject(TuiTableDirective<any>);
    private readonly data = signal<readonly any[]>([]);
    private readonly sorted = computed(
        (direction = this.table.direction(), sorter = this.table.sorter()) =>
            [...this.data()].sort((a, b) => direction * sorter(a, b)),
    );

    public transform<T>(data?: readonly T[] | null): readonly T[] {
        untracked(() => this.data.set(data ?? []));

        return this.sorted();
    }
}
