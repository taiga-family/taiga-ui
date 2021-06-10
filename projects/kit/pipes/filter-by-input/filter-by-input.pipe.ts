import {Pipe, PipeTransform} from '@angular/core';
import {
    TUI_DEFAULT_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TuiStringMatcher,
} from '@taiga-ui/cdk';
import {TuiFilterByInputBase} from './filter-by-input.base';

@Pipe({
    name: 'tuiFilterByInput',
    pure: false,
})
export class TuiFilterByInputPipe extends TuiFilterByInputBase implements PipeTransform {
    transform<T>(
        items: readonly T[] | null,
        matcher: TuiStringMatcher<T> = TUI_DEFAULT_MATCHER,
    ): readonly T[] | null {
        return this.filter(items, matcher, TUI_DEFAULT_STRINGIFY, this.query);
    }
}
