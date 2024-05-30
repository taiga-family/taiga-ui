import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiStringHandler, TuiStringMatcher} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MATCHER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiIsPresent,
    tuiPure,
} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core';
import {tuiIsFlat} from '@taiga-ui/kit/utils';

type TuiArrayElement<A> =
    A extends ReadonlyArray<infer T>
        ? A extends ReadonlyArray<ReadonlyArray<infer G>>
            ? G
            : T
        : never;

// TODO: Adapt for new MultiSelect
@Pipe({
    standalone: true,
    name: 'tuiFilterByInput',
    pure: false,
})
export class TuiFilterByInputPipe implements PipeTransform {
    private readonly host = inject(TUI_DATA_LIST_HOST);
    // protected readonly multiSelect = inject(TuiMultiSelectDirective, {optional: true});
    private readonly accessor = inject(TUI_FOCUSABLE_ITEM_ACCESSOR);

    public transform<T>(items: T, matcher?: TuiStringMatcher<TuiArrayElement<T>>): T;
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
        matcher: TuiStringMatcher<T> = TUI_DEFAULT_MATCHER,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        return this.filter<T>(items, matcher, this.host.stringify || String, this.query);
    }

    private get query(): string {
        return this.accessor.nativeFocusableElement
            ? (this.accessor.nativeFocusableElement as HTMLInputElement).value || ''
            : '';
    }

    @tuiPure
    private filter<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
        matcher: TuiStringMatcher<T>,
        stringify: TuiStringHandler<T>,
        query: string,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        if (!items) {
            return null;
        }

        return tuiIsFlat(items)
            ? this.filterFlat(items, matcher, stringify, query)
            : this.filter2d(items, matcher, stringify, query);
    }

    private filterFlat<T>(
        items: readonly T[],
        matcher: TuiStringMatcher<T>,
        stringify: TuiStringHandler<T>,
        query: string,
    ): readonly T[] {
        const match = this.getMatch(items, stringify, query);

        return tuiIsPresent(match)
            ? items
            : items.filter(item => matcher(item, query, stringify));
    }

    private filter2d<T>(
        items: ReadonlyArray<readonly T[]>,
        matcher: TuiStringMatcher<T>,
        stringify: TuiStringHandler<T>,
        query: string,
    ): ReadonlyArray<readonly T[]> {
        const match = items.find(item =>
            tuiIsPresent(this.getMatch(item, stringify, query)),
        );

        return tuiIsPresent(match)
            ? items
            : items.map(inner => this.filterFlat(inner, matcher, stringify, query));
    }

    private getMatch<T>(
        items: readonly T[],
        stringify: TuiStringHandler<T>,
        query: string,
    ): T | undefined {
        return items.find(
            item => stringify(item).toLocaleLowerCase() === query.toLocaleLowerCase(),
        );
    }
}
