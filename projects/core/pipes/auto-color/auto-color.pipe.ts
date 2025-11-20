import {Pipe, type PipeTransform} from '@angular/core';

import {tuiAutoColor} from './auto-color';

@Pipe({
    name: 'tuiAutoColor',
})
export class TuiAutoColorPipe implements PipeTransform {
    public transform(text: string): string {
        return tuiAutoColor(text);
    }
}
