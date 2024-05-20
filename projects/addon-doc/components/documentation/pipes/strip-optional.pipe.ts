import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'tuiStripOptionalPipe',
})
export class TuiStripOptionalPipe implements PipeTransform {
    public transform(name: string): string {
        return name.replace('?', '');
    }
}
