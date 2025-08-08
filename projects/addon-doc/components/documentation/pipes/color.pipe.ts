import {Pipe, type PipeTransform} from '@angular/core';
import {tuiRgbToHex} from '@taiga-ui/cdk/utils/color';

@Pipe({
    standalone: true,
    name: 'tuiGetColorPipe',
})
export class TuiGetColorPipe implements PipeTransform {
    public transform(color: string): string {
        if (color.length === 4) {
            return color
                .split('')
                .reduce<string[]>((result, current) => [...result, current, current], [])
                .join('')
                .replace('#', '');
        }

        if (color.startsWith('#')) {
            return color;
        }

        if (color === 'transparent') {
            return '#000000';
        }

        const parsed = color
            .replace('rgb(', '')
            .replace('rgba(', '')
            .replace(')', '')
            .replace(' ', '')
            .split(',')
            .map((v) => Number.parseInt(v, 10)) as [number, number, number];

        return tuiRgbToHex(...parsed);
    }
}
