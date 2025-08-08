import {Pipe, type PipeTransform} from '@angular/core';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';

@Pipe({
    standalone: true,
    name: 'tuiStringify',
})
export class TuiStringifyPipe implements PipeTransform {
    public transform<K extends string>(
        key: K,
    ): TuiStringHandler<Readonly<Record<any, any> & Record<K, unknown>>> {
        return (value) => String(value[key] ?? '');
    }
}
