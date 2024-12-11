import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'tuiIntlFormatNumber',
})
export class TuiIntlFormatNumberPipe implements PipeTransform {
    public transform(
        value: number,
        locales?: string[] | string,
        options?: Intl.NumberFormatOptions,
    ): string {
        return new Intl.NumberFormat(locales, options).format(value);
    }
}
