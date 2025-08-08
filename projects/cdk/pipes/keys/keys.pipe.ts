import {Pipe, type PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'tuiKeys',
})
export class TuiKeysPipe implements PipeTransform {
    public transform(object: Record<any, any>): string[] {
        return Object.keys(object);
    }
}
