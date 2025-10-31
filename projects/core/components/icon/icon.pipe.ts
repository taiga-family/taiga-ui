import {Pipe, type PipeTransform} from '@angular/core';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiInjectIconResolver} from '@taiga-ui/core/tokens';

@Pipe({
    name: 'tuiIcon',
})
export class TuiIconPipe implements PipeTransform {
    public readonly transform: TuiStringHandler<string> = tuiInjectIconResolver();
}
