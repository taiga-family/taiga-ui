import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {tuiInjectIconModeResolver, type TuiResolvedIcon} from '@taiga-ui/core/tokens';

@Pipe({
    standalone: true,
    name: 'tuiIcon',
})
export class TuiIconPipe implements PipeTransform {
    public readonly transform: TuiHandler<string, TuiResolvedIcon> =
        tuiInjectIconModeResolver();
}
