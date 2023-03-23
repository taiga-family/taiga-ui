import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import {tuiIsNumber, tuiIsString} from '@taiga-ui/cdk';

@Pipe({name: `tuiIsPrimitivePolymorpheusContentPipe`})
export class TuiIsPrimitivePolymorpheusContentPipe implements PipeTransform {
    transform(value: unknown): boolean {
        return tuiIsString(value) || tuiIsNumber(value);
    }
}
