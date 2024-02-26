import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'tuiIsOptionalPipe'})
export class TuiIsOptionalPipe implements PipeTransform {
    public transform(name: string): boolean {
        return name.includes('?');
    }
}
