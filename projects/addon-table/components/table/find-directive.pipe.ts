import {Pipe, PipeTransform, QueryList} from '@angular/core';
import {TuiCellDirective} from './cell.directive';
import {TuiHeadDirective} from './head.directive';

@Pipe({
    name: 'tuiFindDirective',
})
export class TuiFindDirectivePipe<T extends Record<any, any>, K extends keyof T>
    implements PipeTransform {
    transform(
        directives: QueryList<TuiCellDirective<T, K>>,
        key: K,
    ): TuiCellDirective<T, K> | undefined;
    transform(
        directives: QueryList<TuiHeadDirective<T, K>>,
        key: K,
    ): TuiHeadDirective<T, K> | undefined;
    transform(
        directives: QueryList<TuiCellDirective<T, K>> | QueryList<TuiHeadDirective<T, K>>,
        key: K,
    ): TuiCellDirective<T, K> | TuiHeadDirective<T, K> | undefined {
        return directives.find(
            (directive: TuiCellDirective<T, K> | TuiHeadDirective<T, K>) =>
                directive.is(key),
        );
    }
}
