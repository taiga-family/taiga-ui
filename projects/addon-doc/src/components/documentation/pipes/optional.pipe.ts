import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({name: `tuiIsOptionalPipe`})
export class TuiIsOptionalPipe implements PipeTransform {
    transform(name: string): boolean {
        return name.includes(`?`);
    }
}
