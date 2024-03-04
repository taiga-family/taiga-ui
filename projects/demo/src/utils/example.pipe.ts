import {inject, Pipe, PipeTransform} from '@angular/core';
import {TuiDocExample, TuiDocPageComponent} from '@taiga-ui/addon-doc';

const toKebab: (str: string) => string = str =>
    str.replaceAll(
        /[A-Z]+(?![a-z])|[A-Z]/g,
        ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
    );

@Pipe({name: 'tuiExample', standalone: true})
export class TuiExamplePipe implements PipeTransform {
    protected docPage = inject(TuiDocPageComponent);

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
                        `../modules/${this.docPage.type}/${toKebab(this.docPage.header)}/examples/${index}/index.${format}?raw`
                    ),
                ]),
        );
    }
}
