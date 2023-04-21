import {Pipe, PipeTransform} from '@angular/core';
import {tuiRgbToHex} from '@taiga-ui/cdk';

@Pipe({name: `tuiGetColorPipe`})
export class TuiGetColorPipe implements PipeTransform {
    transform(color: string): string {
        if (color.length === 4) {
            return color
                .split(``)
                .reduce<string[]>((result, current) => [...result, current, current], [])
                .join(``)
                .replace(`#`, ``);
        }

        if (color.startsWith(`#`)) {
            return color;
        }

        if (color === `transparent`) {
            return `#000000`;
        }

        const parsed = color
            .replace(`rgb(`, ``)
            .replace(`rgba(`, ``)
            .replace(`)`, ``)
            .replace(` `, ``)
            .split(`,`)
            .map(v => Number.parseInt(v, 10)) as [number, number, number];

        return tuiRgbToHex(...parsed);
    }
}
