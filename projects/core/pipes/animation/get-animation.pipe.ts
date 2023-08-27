import {Pipe, PipeTransform} from '@angular/core';
import {TuiDurationOptions} from '@taiga-ui/core/animations';

@Pipe({name: `tuiGetAnimation`})
export class TuiGetAnimationPipe implements PipeTransform {
    transform(duration: number, value = ``): TuiDurationOptions {
        return {value, params: {duration}};
    }
}
