import {Pipe, type PipeTransform} from '@angular/core';
import {tuiToKebab} from '@taiga-ui/addon-doc';

@Pipe({name: 'tuiKebab'})
export class TuiKebabPipe implements PipeTransform {
    public readonly transform = tuiToKebab;
}
