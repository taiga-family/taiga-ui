import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import {tuiStringHashToHsl} from '@taiga-ui/core/utils';

@Pipe({
    standalone: true,
    name: 'tuiAutoColor',
})
export class TuiAutoColorPipe implements PipeTransform {
    public transform(text: string): string {
        return tuiStringHashToHsl(text);
    }
}
