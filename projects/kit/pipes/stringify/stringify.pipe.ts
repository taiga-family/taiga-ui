import {Pipe, PipeTransform} from '@angular/core';
import {TuiStringHandler} from '@taiga-ui/cdk';

@Pipe({
    name: `tuiStringify`,
})
export class TuiStringifyPipe implements PipeTransform {
    transform<K extends string>(
        key: K,
    ): TuiStringHandler<Readonly<Record<any, any> & Record<K, unknown>>> {
        return value => String(value[key] ?? ``);
    }
}
