import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ratingPercent'})
export class TuiRatingPercentPipe implements PipeTransform {
    transform(focusedValue: number, currentValue: number, max: number): number {
        const computed: number = focusedValue > 0 ? focusedValue : currentValue;

        return (100 * computed) / max;
    }
}
