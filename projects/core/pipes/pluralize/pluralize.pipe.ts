import {Pipe, PipeTransform} from '@angular/core';
import {TuiPluralize} from '@taiga-ui/core/types';
import {pluralize} from '@taiga-ui/core/utils/format';

@Pipe({name: 'tuiPluralize'})
export class TuiPluralizePipe implements PipeTransform {
    /**
     * Выбирает корректную форму множественного числа для отображения количества
     * @param value число
     * @param args массив из трёх форм множественного числа, например ['год', 'года', 'лет']
     */
    transform(value: number, args: TuiPluralize): string {
        return pluralize(value, args);
    }
}
