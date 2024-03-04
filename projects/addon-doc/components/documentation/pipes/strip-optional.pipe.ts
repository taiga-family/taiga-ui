import {Pipe, type PipeTransform} from '@angular/core';

@Pipe({name: 'tuiStripOptionalPipe'})
export class TuiStripOptionalPipe implements PipeTransform {
    public transform(name: string): string {
        return name.replace('?', '');
    }
}
