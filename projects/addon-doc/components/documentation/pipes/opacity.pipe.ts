import {Pipe, type PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'tuiGetOpacity',
})
export class TuiGetOpacityPipe implements PipeTransform {
    public transform(color: string): number {
        if (color.startsWith('#') || color.startsWith('rgb(')) {
            return 100;
        }

        if (color === 'transparent') {
            return 0;
        }

        const lastComma = color.lastIndexOf(',');
        const parsed = color
            .slice(lastComma)
            .replace(')', '')
            .replace(' ', '')
            .replace(',', '');

        return Math.round(Number.parseFloat(parsed) * 100);
    }
}
