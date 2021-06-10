import {Directive, Inject} from '@angular/core';
import {
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiFocusableElementAccessor,
    tuiPure,
    TuiStringHandler,
    TuiStringMatcher,
} from '@taiga-ui/cdk';

@Directive()
export abstract class TuiFilterByInputBase {
    constructor(
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        private readonly accessor: TuiFocusableElementAccessor,
    ) {}

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
