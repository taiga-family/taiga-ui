import {Pipe, PipeTransform} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Pipe({name: 'tuiExample', standalone: true})
export class TuiExample implements PipeTransform {
    transform(
        index: number,
        path: string,
        formats:
            | string
            | 'html,less'
            | 'html,ts,less'
            | 'html,ts'
            | 'html' = 'ts,less,html',
    ): TuiDocExample {
        return Object.fromEntries(
            formats
                .split(',')
                .map(format => [
                    format.toUpperCase(),
                    import(`../modules/${path}/examples/${index}/index.${format}?raw`),
                ]),
        );
    }
}
