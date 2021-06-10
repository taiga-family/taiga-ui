import {
    TuiFocusableElementAccessor,
    tuiPure,
    TuiStringHandler,
    TuiStringMatcher,
} from '@taiga-ui/cdk';

export abstract class TuiFilterByInputBase {
    protected abstract readonly accessor: TuiFocusableElementAccessor;

    protected get query(): string {
        return this.accessor.nativeFocusableElement
            ? (this.accessor.nativeFocusableElement as any).value || ''
            : '';
    }

    @tuiPure
    protected filter<T>(
        items: readonly T[] | null,
        matcher: TuiStringMatcher<T>,
        stringify: TuiStringHandler<T>,
        query: string,
    ): readonly T[] | null {
        return items && items.filter(item => matcher(item, query, stringify));
    }
}
