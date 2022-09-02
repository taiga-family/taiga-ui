import type {PipeTransform} from '@angular/core';
import {Inject, Pipe} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MATCHER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';

import type {ArrayElement} from './filter-by-input.base';
import {AbstractTuiFilterByInput} from './filter-by-input.base';

@Pipe({
    name: `tuiFilterByInputWith`,
    pure: false,
})
export class TuiFilterByInputWithPipe
    extends AbstractTuiFilterByInput
    implements PipeTransform
{
    constructor(
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        protected readonly accessor: TuiFocusableElementAccessor,
    ) {
        super();
    }

    transform<T>(items: T, matcher?: TuiStringHandler<ArrayElement<T>>): T;
    transform<T>(
        items: readonly T[] | ReadonlyArray<readonly T[]> | null,
        stringify: TuiStringHandler<T>,
    ): readonly T[] | ReadonlyArray<readonly T[]> | null {
        return this.filter(items, TUI_DEFAULT_MATCHER, stringify, this.query);
    }
}
