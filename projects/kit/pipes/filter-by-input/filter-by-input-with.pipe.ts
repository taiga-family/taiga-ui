import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MATCHER, TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';

import type {TuiArrayElement} from './filter-by-input.base';
import {AbstractTuiFilterByInput} from './filter-by-input.base';

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
    // protected readonly multiSelect = inject(TuiMultiSelectDirective, {optional: true});
    protected readonly multiSelect = null;
    protected readonly accessor = inject(TUI_FOCUSABLE_ITEM_ACCESSOR);

    public transform<T>(items: T, matcher?: TuiStringHandler<TuiArrayElement<T>>): T;
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
        stringify: TuiStringHandler<T>,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        return this.filter(items, TUI_DEFAULT_MATCHER, stringify, this.query);
    }
}
