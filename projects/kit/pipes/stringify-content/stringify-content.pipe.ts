import {Pipe, PipeTransform} from '@angular/core';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {TuiValueContentContext} from '@taiga-ui/core';

@Pipe({
    name: 'tuiStringifyContent',
})
export class TuiStringifyContentPipe implements PipeTransform {
    transform<T>(
        stringify: TuiStringHandler<T>,
    ): (value: TuiValueContentContext<T>) => string {
        return ({$implicit}) => stringify($implicit);
    }
}
