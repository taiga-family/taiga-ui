import {Pipe, type PipeTransform} from '@angular/core';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk/types';

@Pipe({
    name: 'tuiStringifyContent',
})
export class TuiStringifyContentPipe implements PipeTransform {
    public transform<T>(stringify: TuiStringHandler<T>): TuiStringHandler<TuiContext<T>> {
        return ({$implicit}) => stringify($implicit);
    }
}
