import {
    computed,
    inject,
    Pipe,
    type PipeTransform,
    signal,
    untracked,
} from '@angular/core';
import {tuiIsFlat} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {TUI_TEXTFIELD_VALUE} from '@taiga-ui/core/tokens';

import {
    TUI_FILTER_BY_INPUT_OPTIONS,
    type TuiFilterByInputOptions,
} from './filter-by-input.options';

@Pipe({name: 'tuiFilterByInput', pure: false})
export class TuiFilterByInputPipe implements PipeTransform {
    private readonly options = inject(TUI_FILTER_BY_INPUT_OPTIONS);
    private readonly search = inject(TUI_TEXTFIELD_VALUE);
    private readonly handlers = inject(TUI_ITEMS_HANDLERS);
    private readonly filter = signal<TuiFilterByInputOptions['filter']>(
        this.options.filter,
    );

    private readonly filterFlat = computed(
        (
            filter = this.filter(),
            search = this.search(),
            stringify = this.handlers.stringify(),
        ) =>
            (items: readonly unknown[]) =>
                filter(items, search, stringify),
    );

    private readonly items = signal<readonly any[] | null>([]);
    private readonly filtered = computed(
        (items = this.items(), filter = this.filterFlat()) =>
            items && (tuiIsFlat(items) ? filter(items) : this.filter2d(items)),
    );

    public transform<T>(
        items: ReadonlyArray<readonly T[]>,
        filter?: TuiFilterByInputOptions<T>['filter'],
    ): ReadonlyArray<readonly T[]>;
    public transform<T>(
        items: readonly T[],
        filter?: TuiFilterByInputOptions<T>['filter'],
    ): readonly T[];
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | null,
        filter?: TuiFilterByInputOptions<T>['filter'],
    ): ReadonlyArray<readonly T[]> | null;
    public transform<T>(
        items: readonly T[] | null,
        filter?: TuiFilterByInputOptions<T>['filter'],
    ): readonly T[] | null;
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
        filter: TuiFilterByInputOptions<T>['filter'] = this.options.filter,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        untracked(() => {
            this.items.set(items);
            this.filter.set(filter);
        });

        return this.filtered() as ReadonlyArray<readonly T[]> | readonly T[] | null;
    }

    private filter2d<T>(
        groups: ReadonlyArray<readonly T[]>,
    ): ReadonlyArray<readonly T[]> {
        const groupMap = new Map(
            groups.flatMap((group, i) => group.map((item) => [item, i])),
        );
        const filteredGroups: T[][] = [];

        this.filterFlat()(groups.flat()).forEach((item) => {
            const i = groupMap.get(item)!;

            filteredGroups[i] = filteredGroups[i]?.concat(item) ?? [item];
        });

        return filteredGroups;
    }
}
