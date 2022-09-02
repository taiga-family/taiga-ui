import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({name: `tuiKeys`})
export class TuiKeysPipe implements PipeTransform {
    transform(object: Record<any, any>): string[] {
        return Object.keys(object);
    }
}
