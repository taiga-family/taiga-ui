import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import {tuiStringHashToHsl} from '@taiga-ui/kit';

@Pipe({
    name: 'tuiAutoColor',
})
export class TuiAutoColorPipe implements PipeTransform {
    public transform(text: string): string {
        return tuiStringHashToHsl(text);
    }
}
