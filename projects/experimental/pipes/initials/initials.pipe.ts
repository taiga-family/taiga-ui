import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({
    name: 'tuiInitials',
})
export class TuiInitialsPipe implements PipeTransform {
    public transform(text: string): string {
        return text
            .toUpperCase()
            .split(' ')
            .map(([char]) => char)
            .join('')
            .slice(0, 2);
    }
}
