/* eslint-disable @typescript-eslint/naming-convention */
import {
    TuiFocusableElementAccessor,
    tuiIsPresent,
    tuiPure,
    TuiStringHandler,
    TuiStringMatcher,
} from '@taiga-ui/cdk';
import {isFlat} from '@taiga-ui/kit/utils';

export type ArrayElement<A> = A extends ReadonlyArray<infer T>
    ? A extends ReadonlyArray<ReadonlyArray<infer G>>
        ? G
        : T
    : never;

/**
 * @deprecated
 * TODO: 3.0 replace with {@link AbstractTuiFilterByInput}
 */
export abstract class TuiFilterByInputBase {
    protected abstract readonly accessor: TuiFocusableElementAccessor;
    protected abstract strictMode: boolean;

    protected get query(): string {
        return this.accessor.nativeFocusableElement
            ? (this.accessor.nativeFocusableElement as HTMLInputElement).value || ``
            : ``;
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
        if (this.strictMode) {
            const match = this.getMatch(items, stringify, query);

            return tuiIsPresent(match)
                ? items
                : items.filter(item => matcher(item, query, stringify));
        }

        return items.filter(item => matcher(item, query, stringify));
    }

    private filter2d<T>(
        items: ReadonlyArray<readonly T[]>,
        matcher: TuiStringMatcher<T>,
        stringify: TuiStringHandler<T>,
        query: string,
    ): ReadonlyArray<readonly T[]> {
        if (this.strictMode) {
            const match = items.find(item =>
                tuiIsPresent(this.getMatch(item, stringify, query)),
            );

            return tuiIsPresent(match)
                ? items
                : items.map(inner => this.filterFlat(inner, matcher, stringify, query));
        }

        return items.map(inner => this.filterFlat(inner, matcher, stringify, query));
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

export abstract class AbstractTuiFilterByInput extends TuiFilterByInputBase {}
