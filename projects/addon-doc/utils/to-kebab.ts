import {Pipe, type PipeTransform} from '@angular/core';

export function tuiToKebab(str: string): string {
    return str
        .replaceAll(' ', '-')
        .replaceAll(
            /[A-Z]+(?![a-z])|[A-Z]/g,
            ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
        );
}

@Pipe({name: 'tuiKebab'})
export class TuiDocKebabPipe implements PipeTransform {
    public readonly transform = tuiToKebab;
}
