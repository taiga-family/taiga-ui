import {Pipe, type PipeTransform} from '@angular/core';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';

@Pipe({
    standalone: true,
    name: 'tuiStringifyValues',
})
export class TuiStringifyValuesPipe implements PipeTransform {
    public transform<T extends object, K1 extends keyof T, K2 extends keyof T>(
        items: readonly T[] | null,
        valueKey: K1,
        dataKey: K2,
    ): TuiStringHandler<T[K1]> {
        if (items === null) {
            return () => '';
        }

        return (value) => {
            const foundValue = items?.find((item) => item[valueKey] === value)?.[dataKey];

            return String(foundValue ?? value);
        };
    }
}
