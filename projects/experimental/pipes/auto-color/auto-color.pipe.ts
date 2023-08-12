import {Pipe, PipeTransform} from '@angular/core';
import {tuiStringHashToHsl} from '@taiga-ui/kit';

@Pipe({
    name: `tuiAutoColor`,
})
export class TuiAutoColorPipe implements PipeTransform {
    transform(text: string): string {
        return tuiStringHashToHsl(text);
    }
}
