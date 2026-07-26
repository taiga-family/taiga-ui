import {Pipe, type PipeTransform} from '@angular/core';
import {tuiInjectIconResolver} from '@taiga-ui/core/tokens';

@Pipe({name: 'tuiIcon'})
export class TuiIconPipe implements PipeTransform {
    public readonly transform = tuiInjectIconResolver();
}
