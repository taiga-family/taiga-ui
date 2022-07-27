import {Pipe, PipeTransform} from '@angular/core';
import {TuiMatcher} from '@taiga-ui/cdk/types';

@Pipe({name: `tuiFilter`})
export class TuiFilterPipe implements PipeTransform {
    /**
     * Filters an array through a matcher function using additional arguments
     *
     * @param items array
     * @param matcher method for filtering
     * @param args arbitrary number of additional arguments
     */
    transform<T>(items: readonly T[], matcher: TuiMatcher<T>, ...args: any[]): T[] {
        return items.filter(item => matcher(item, ...args));
    }
}
