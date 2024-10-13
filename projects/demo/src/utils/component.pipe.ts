import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {TuiDocPage} from '@taiga-ui/addon-doc';

import {toKebab} from './kebab.pipe';

@Pipe({
    standalone: true,
    name: 'tuiComponent',
})
export class TuiComponentPipe implements PipeTransform {
    private readonly page = inject(TuiDocPage);

    public async transform(index: number): Promise<{readonly default: unknown}> {
        return import(
            `../modules/${this.page.type}/${toKebab(this.page.header)}/examples/${index}/index.ts`
        );
    }
}
