import type {PipeTransform} from '@angular/core';
import {Inject, Pipe} from '@angular/core';
import type {TuiStringMatcher} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';

import type {ArrayElement} from './filter-by-input.base';
import {AbstractTuiFilterByInput} from './filter-by-input.base';

@Pipe({
    name: `tuiFilterByInput`,
    pure: false,
})
export class TuiFilterByInputPipe
    extends AbstractTuiFilterByInput
    implements PipeTransform
{
    constructor(
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        protected readonly accessor: TuiFocusableElementAccessor,
    ) {
        super();
    }

    transform<T>(items: T, matcher?: TuiStringMatcher<ArrayElement<T>>): T;
    transform<T>(
        items: readonly T[] | ReadonlyArray<readonly T[]> | null,
        matcher: TuiStringMatcher<T> = TUI_DEFAULT_MATCHER,
    ): readonly T[] | ReadonlyArray<readonly T[]> | null {
        return this.filter(items, matcher, TUI_DEFAULT_STRINGIFY, this.query);
    }
}
