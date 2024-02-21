import {inject, Pipe, PipeTransform} from '@angular/core';
import {
    TUI_DEFAULT_MATCHER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {TuiMultiSelectDirective} from '@taiga-ui/kit/components/multi-select';

import {AbstractTuiFilterByInput, TuiArrayElement} from './filter-by-input.base';

/**
 * @deprecated Use {@link TuiFilterByInputPipe} instead
 */
@Pipe({
    name: 'tuiFilterByInputWith',
    pure: false,
})
export class TuiFilterByInputWithPipe
    extends AbstractTuiFilterByInput
    implements PipeTransform
{
    protected readonly multiSelect = inject(TuiMultiSelectDirective, {optional: true});
    protected readonly accessor = inject(TUI_FOCUSABLE_ITEM_ACCESSOR);

    transform<T>(items: T, matcher?: TuiStringHandler<TuiArrayElement<T>>): T;
    transform<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
        stringify: TuiStringHandler<T>,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        return this.filter(items, TUI_DEFAULT_MATCHER, stringify, this.query);
    }
}
