import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: `tuiIsOptionalPipe`})
export class TuiIsOptionalPipe implements PipeTransform {
    transform(name: string): boolean {
        return name.includes(`?`);
    }
}
