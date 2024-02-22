import {Pipe, PipeTransform} from '@angular/core';

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
