import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

export function toKebab(str: string): string {
    return str
        .replaceAll(' ', '-')
        .replaceAll(
            /[A-Z]+(?![a-z])|[A-Z]/g,
            ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
        );
}

@Pipe({
    standalone: true,
    name: 'tuiKebab',
})
export class TuiKebabPipe implements PipeTransform {
    public readonly transform = toKebab;
}
