import {Pipe, type PipeTransform} from '@angular/core';
import {tuiIsNumber, tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';

@Pipe({
    standalone: true,
    name: 'tuiIsPrimitivePolymorpheusContentPipe',
})
export class TuiIsPrimitivePolymorpheusContentPipe implements PipeTransform {
    public transform(value: unknown): boolean {
        return tuiIsString(value) || tuiIsNumber(value);
    }
}
