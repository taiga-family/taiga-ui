import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: `tuiShowCleanerPipe`})
export class TuiShowCleanerPipe implements PipeTransform {
    transform(type: string): boolean {
        return type.includes(`null`);
    }
}
