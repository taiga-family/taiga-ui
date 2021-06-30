import {Pipe, PipeTransform} from '@angular/core';
import {TuiContextWithImplicit, TuiStringHandler} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Pipe({
    name: 'tuiStringifyContent',
})
export class TuiStringifyContentPipe implements PipeTransform {
    transform<T>(
        stringify: TuiStringHandler<T>,
    ): PolymorpheusContent<TuiContextWithImplicit<T>> {
        return ({$implicit}) => stringify($implicit);
    }
}
