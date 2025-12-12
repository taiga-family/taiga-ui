import {Pipe, type PipeTransform} from '@angular/core';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';

@Pipe({name: 'tuiFormatCard'})
export class TuiFormatCardPipe implements PipeTransform {
    public transform(value: string | null = '', cardPrefilled = false): string {
        return value && !cardPrefilled
            ? value
                  .split('')
                  .map((char, index) =>
                      index && index % 4 === 0 ? `${CHAR_NO_BREAK_SPACE}${char}` : char,
                  )
                  .join('')
            : '';
    }
}
