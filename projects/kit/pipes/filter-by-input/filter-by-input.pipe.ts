import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiStringMatcher} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core';
import {TuiMultiSelectDirective} from '@taiga-ui/kit/components/multi-select';

import type {TuiArrayElement} from './filter-by-input.base';
import {AbstractTuiFilterByInput} from './filter-by-input.base';

@Pipe({
    name: 'tuiFilterByInput',
    pure: false,
})
export class TuiFilterByInputPipe
    extends AbstractTuiFilterByInput
    implements PipeTransform
{
    private readonly host = inject(TUI_DATA_LIST_HOST);
    protected readonly multiSelect = inject(TuiMultiSelectDirective, {optional: true});
    protected readonly accessor = inject(TUI_FOCUSABLE_ITEM_ACCESSOR);

    public transform<T>(items: T, matcher?: TuiStringMatcher<TuiArrayElement<T>>): T;
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
        matcher: TuiStringMatcher<T> = TUI_DEFAULT_MATCHER,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        return this.filter<T>(
            items,
            matcher,
            this.host.stringify || TUI_DEFAULT_STRINGIFY,
            this.query,
        );
    }
}
