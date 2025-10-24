import {inject, Pipe, type PipeTransform} from '@angular/core';
import {TuiDocPage, type TuiRawLoaderContent} from '@taiga-ui/addon-doc';

import {toKebab} from './kebab.pipe';

@Pipe({
    standalone: true,
    name: 'tuiExample',
})
export class TuiExamplePipe implements PipeTransform {
    private readonly page = inject(TuiDocPage);

    public transform(
        index: number,
        formats:
            | 'html,less'
            | 'html,ts,less'
            | 'html,ts'
            | 'html'
            | 'ts' = 'html,ts,less',
        additionalFiles?: Record<string, TuiRawLoaderContent>,
    ): Record<string, TuiRawLoaderContent> {
        return Object.fromEntries(
            formats
                .split(',')
                .map((format) => [
                    format === 'ts' ? 'TypeScript' : format.toUpperCase(),
                    import(
                        `../modules/${this.page.type()}/${toKebab(this.page.header())}/examples/${index}/index.${format}?raw`
                    ).catch(() => ({default: ''})),
                ])
                .concat(additionalFiles ? Object.entries(additionalFiles) : []),
        );
    }
}
