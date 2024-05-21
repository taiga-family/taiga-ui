import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'tuiIsOptionalPipe',
})
export class TuiIsOptionalPipe implements PipeTransform {
    public transform(name: string): boolean {
        return name.includes('?');
    }
}
