import type {PipeTransform, Type} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {TuiDocPage} from '@taiga-ui/addon-doc';

import {toKebab} from './kebab.pipe';

@Pipe({
    standalone: true,
    name: 'tuiComponent',
})
export class TuiComponentPipe implements PipeTransform {
    private readonly page = inject(TuiDocPage);

    public async transform(index: number): Promise<{readonly default: Type<unknown>}> {
        return import(
            `../modules/${this.page.type}/${toKebab(this.page.header)}/examples/${index}/index.ts`
        );
    }
}
