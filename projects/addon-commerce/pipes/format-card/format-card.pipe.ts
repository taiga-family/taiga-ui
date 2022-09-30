import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: `tuiFormatCard`})
export class TuiFormatCardPipe implements PipeTransform {
    transform(value: string | null = ``, cardPrefilled: boolean = false): string {
        return value && !cardPrefilled
            ? value
                  .split(``)
                  .map((char, index) => (index && index % 4 === 0 ? ` ${char}` : char))
                  .join(``)
            : ``;
    }
}
