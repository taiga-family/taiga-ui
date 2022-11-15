import {Pipe, PipeTransform} from '@angular/core';
import {tuiIsPresent} from '@taiga-ui/cdk/utils';

@Pipe({name: `tuiIsPresent`})
export class TuiIsPresentPipe implements PipeTransform {
    transform<T>(value?: T | null): value is T {
        return tuiIsPresent(value);
    }
}
