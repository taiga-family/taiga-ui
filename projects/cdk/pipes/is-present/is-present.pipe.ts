import {Pipe, type PipeTransform} from '@angular/core';
import {tuiIsPresent} from '@taiga-ui/cdk/utils';

@Pipe({
    standalone: true,
    name: 'tuiIsPresent',
})
export class TuiIsPresentPipe implements PipeTransform {
    public transform<T>(value?: T | null): value is T {
        return tuiIsPresent(value);
    }
}
