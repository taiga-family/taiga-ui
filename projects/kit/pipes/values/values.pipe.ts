import {Pipe, type PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'tuiValues',
})
export class TuiValuesPipe implements PipeTransform {
    public transform<T extends object, K extends keyof T>(
        items: readonly T[] | null,
        key: K,
    ): Array<T[K]> | null {
        if (items === null) {
            return null;
        }

        return items.map((item) => item[key]);
    }
}
