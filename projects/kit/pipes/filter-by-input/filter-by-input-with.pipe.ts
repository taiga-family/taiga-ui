import {Pipe, PipeTransform} from '@angular/core';
import {TUI_DEFAULT_MATCHER, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiFilterByInputBase} from './filter-by-input.base';

@Pipe({
    name: 'tuiFilterByInputWith',
    pure: false,
})
export class TuiFilterByInputWithPipe
    extends TuiFilterByInputBase
    implements PipeTransform {
    transform<T>(
        items: readonly T[] | null,
        stringify: TuiStringHandler<T>,
    ): readonly T[] | null {
        return this.filter(items, TUI_DEFAULT_MATCHER, stringify, this.query);
    }
}
