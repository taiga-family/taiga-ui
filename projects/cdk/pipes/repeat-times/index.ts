import {Pipe, type PipeTransform} from '@angular/core';
import {tuiClamp} from '@taiga-ui/cdk/utils';

@Pipe({
    name: 'tuiRepeatTimes',
})
export class TuiRepeatTimesPipe implements PipeTransform {
    public transform(n: number): number[] {
        return Array.from({length: tuiClamp(n, 0, n)}, (_, i) => i);
    }
}
