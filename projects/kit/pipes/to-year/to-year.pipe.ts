import {Pipe, PipeTransform} from '@angular/core';
import {TuiYear} from '@taiga-ui/cdk';

@Pipe({
    name: `tuiToYear`,
})
export class TuiToYearPipe implements PipeTransform {
    transform(value: number): TuiYear {
        return new TuiYear(value);
    }
}
