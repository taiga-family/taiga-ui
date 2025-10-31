import {Pipe, type PipeTransform, type QueryList} from '@angular/core';

@Pipe({
    name: 'tuiToArray',
})
export class TuiToArrayPipe implements PipeTransform {
    public transform<T>(items: Map<any, any> | QueryList<T> | Set<any>): readonly T[] {
        return Array.from(items);
    }
}
