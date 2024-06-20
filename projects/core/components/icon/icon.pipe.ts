import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiInjectIconResolver} from '@taiga-ui/core/tokens';

@Pipe({
    standalone: true,
    name: 'tuiIcon',
})
export class TuiIconPipe implements PipeTransform {
    public readonly transform: TuiStringHandler<string> = tuiInjectIconResolver();
}
