import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: `tuiSlice`})
export class TuiSlicePipe implements PipeTransform {
    transform(value: string, start?: number, end?: number): string {
        return value.slice(start, end);
    }
}
