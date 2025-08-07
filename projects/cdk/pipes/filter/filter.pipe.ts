import {Pipe, type PipeTransform} from '@angular/core';
import {type TuiMatcher} from '@taiga-ui/cdk/types';

@Pipe({
    standalone: true,
    name: 'tuiFilter',
})
export class TuiFilterPipe implements PipeTransform {
    /**
     * Filters an array through a matcher function using additional arguments
     *
     * @param items array
     * @param matcher method for filtering
     * @param args arbitrary number of additional arguments
     */
    public transform<T, U extends unknown[]>(
        items: readonly T[],
        matcher: TuiMatcher<[T, ...U]>,
        ...args: U
    ): T[] {
        return items.filter((item) => matcher(item, ...args));
    }
}
