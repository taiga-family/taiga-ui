import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import type {TuiValueContentContext} from '@taiga-ui/core';

@Pipe({
    name: `tuiStringifyContent`,
})
export class TuiStringifyContentPipe implements PipeTransform {
    transform<T>(
        stringify: TuiStringHandler<T>,
    ): TuiStringHandler<TuiValueContentContext<T>> {
        return ({$implicit}) => stringify($implicit);
    }
}
