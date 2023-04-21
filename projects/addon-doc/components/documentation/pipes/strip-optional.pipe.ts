import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: `tuiStripOptionalPipe`})
export class TuiStripOptionalPipe implements PipeTransform {
    transform(name: string): string {
        return name.replace(`?`, ``);
    }
}
