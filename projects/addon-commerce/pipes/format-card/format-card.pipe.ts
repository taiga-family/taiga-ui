import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({name: 'tuiFormatCard'})
export class TuiFormatCardPipe implements PipeTransform {
    public transform(value: string | null = '', cardPrefilled = false): string {
        return value && !cardPrefilled
            ? value
                  .split('')
                  .map((char, index) => (index && index % 4 === 0 ? ` ${char}` : char))
                  .join('')
            : '';
    }
}
