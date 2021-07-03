import {Pipe, PipeTransform} from '@angular/core';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {TuiValueContentContext} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Pipe({
    name: 'tuiStringifyContent',
})
export class TuiStringifyContentPipe implements PipeTransform {
    transform<T>(
        stringify: TuiStringHandler<T>,
    ): PolymorpheusContent<TuiValueContentContext<T>> {
        return ({$implicit}) => stringify($implicit);
    }
}
