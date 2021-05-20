import {Inject, Pipe, PipeTransform} from '@angular/core';
import {
    TUI_DEFAULT_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiFocusableElementAccessor,
    tuiPure,
    TuiStringMatcher,
} from '@taiga-ui/cdk';

@Pipe({
    name: 'tuiFilterByInput',
    pure: false,
})
export class TuiFilterByInputPipe implements PipeTransform {
    constructor(
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        private readonly accessor: TuiFocusableElementAccessor,
    ) {}

    transform<T>(
        items: readonly T[],
        matcher: TuiStringMatcher<T> = TUI_DEFAULT_MATCHER,
    ): unknown {
        return this.filter(items, matcher, this.query);
    }

    private get query(): string {
        return this.accessor.nativeFocusableElement
            ? (this.accessor.nativeFocusableElement as any).value || ''
            : '';
    }

    @tuiPure
    private filter<T>(
        items: readonly T[],
        matcher: TuiStringMatcher<T>,
        query: string,
    ): readonly T[] {
        return items.filter(item => matcher(item, query, TUI_DEFAULT_STRINGIFY));
    }
}
