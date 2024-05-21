import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'tuiShowCleanerPipe',
})
export class TuiShowCleanerPipe implements PipeTransform {
    public transform(type: string): boolean {
        return type.includes('null');
    }
}
