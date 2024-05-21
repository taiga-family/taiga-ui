import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDocPageComponent} from '@taiga-ui/addon-doc';

import {toKebab} from './kebab.pipe';

@Pipe({standalone: true, name: 'tuiExample'})
export class TuiExamplePipe implements PipeTransform {
    private readonly page = inject(TuiDocPageComponent);

    public transform(
        index: number,
        formats:
            | 'html,less'
            | 'html,ts,less'
            | 'html,ts'
            | 'html'
            | 'ts' = 'html,ts,less',
    ): TuiDocExample {
        return Object.fromEntries(
            formats
                .split(',')
                .map(format => [
                    format === 'ts' ? 'TypeScript' : format.toUpperCase(),
                    import(
                        `../modules/${this.page.type}/${toKebab(this.page.header)}/examples/${index}/index.${format}?raw`
                    ),
                ]),
        );
    }
}
