import {
    TuiFocusableElementAccessor,
    tuiPure,
    TuiStringHandler,
    TuiStringMatcher,
} from '@taiga-ui/cdk';
import {isFlat} from '@taiga-ui/kit/utils';

export type ArrayElement<A> = A extends readonly (infer T)[]
    ? A extends readonly (readonly (infer G)[])[]
        ? G
        : T
    : never;

export abstract class TuiFilterByInputBase {
    protected abstract readonly accessor: TuiFocusableElementAccessor;

    protected get query(): string {
        return this.accessor.nativeFocusableElement
            ? (this.accessor.nativeFocusableElement as any).value || ''
            : '';
    }

    @tuiPure
    protected filter<T>(
        items: readonly T[] | ReadonlyArray<readonly T[]> | null,
        matcher: TuiStringMatcher<T>,
        stringify: TuiStringHandler<T>,
        query: string,
    ): readonly T[] | ReadonlyArray<readonly T[]> | null {
        if (!items) {
            return null;
        }

        return isFlat(items)
            ? this.filterFlat(items, matcher, stringify, query)
            : this.filter2d(items, matcher, stringify, query);
    }

    private filterFlat<T>(
        items: readonly T[],
        matcher: TuiStringMatcher<T>,
        stringify: TuiStringHandler<T>,
        query: string,
    ): readonly T[] {
        return items.filter(item => matcher(item, query, stringify));
    }

    private filter2d<T>(
        items: ReadonlyArray<readonly T[]>,
        matcher: TuiStringMatcher<T>,
        stringify: TuiStringHandler<T>,
        query: string,
    ): ReadonlyArray<readonly T[]> {
        return items.map(inner => this.filterFlat(inner, matcher, stringify, query));
    }
}
